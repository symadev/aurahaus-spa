import React, { useEffect, useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ formData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [cardError, setCardError] = useState('');
  const [success, setSuccess] = useState('');
  const [transactionId, setTransactionId] = useState('');

  const price = 50; // USD
  const amountInCents = price * 100;

  useEffect(() => {
    if (price > 0) {
      axios.post('http://localhost:5000/create-payment-intent', { amount: amountInCents })
        .then(res => {
          setClientSecret(res.data.clientSecret);
        })
        .catch(err => {
          console.error("Failed to get client secret", err);
        });
    }
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements || !clientSecret) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    const { error: methodError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
      billing_details: {
        name: formData.name,
        email: formData.email,
      },
    });

    if (methodError) {
      setCardError(methodError.message);
      return;
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card,
        billing_details: {
          name: formData.name,
          email: formData.email,
        },
      },
    });

    if (confirmError) {
      setCardError(confirmError.message);
      setProcessing(false);
    } else if (paymentIntent.status === 'succeeded') {
      setSuccess('Payment successful!');
      setTransactionId(paymentIntent.id);

      // Save to MongoDB
      const paymentData = {
        name: formData.name,
        email: formData.email,
        service: formData.service,
        price:formData.amount,
        transactionId: paymentIntent.id,
        date: new Date(),
      };

      axios.post('http://localhost:5000/payments', paymentData)
        .then(() => {
          console.log('Payment saved');
          navigate('/dashboard/bookingList');
        });
    }

    setProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <CardElement className="p-4 border rounded-lg" />
      {cardError && <p className="text-red-500">{cardError}</p>}
      {success && <p className="text-green-500">✅ {success} | TxID: {transactionId}</p>}
      <button
        type="submit"
        className="btn btn-primary"
        disabled={!stripe || !clientSecret || processing}
      >
        {processing ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
};

export default CheckoutForm;
