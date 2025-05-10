import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ formData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    setProcessing(true);

    // 1. Create PaymentIntent
    const { data } = await axios.post('http://localhost:5000/create-payment-intent', {
      amount: 1000
    });

    // 2. Confirm card payment
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(data.clientSecret, {
      payment_method: {
        card,
        billing_details: {
          name: formData.name,
          email: formData.email
        }
      }
    });

    if (confirmError) {
      setError(confirmError.message);
      setProcessing(false);
      return;
    }

    // 3. Save booking
    if (paymentIntent.status === 'succeeded') {
      const paymentRecord = {
        name: formData.name,
        email: formData.email,
        service: formData.service,
        transactionId: paymentIntent.id,
        price: 1000,
        date: new Date(),
        status: 'paid'
      };
      const token = localStorage.getItem('access-token');

      const res = await axios.post('http://localhost:5000/payments', paymentRecord, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });




      
      if (res.data.insertedId) {
        Swal.fire('Success!', 'Payment recorded successfully.', 'success');
        navigate('/dashboard/bookingList');
      } else {
        Swal.fire('Error!', 'Payment succeeded but saving failed.', 'error');
      }
    }

    setProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <CardElement options={{
        style: {
          base: {
            fontSize: '16px',
            color: '#424770',
            '::placeholder': { color: '#aab7c4' },
          },
          invalid: { color: '#9e2146' },
        },
      }} />
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" disabled={!stripe || processing} className="btn btn-primary mt-4">
        {processing ? 'Processing…' : 'Pay Now'}
      </button>
    </form>
  );
};

export default CheckoutForm;
