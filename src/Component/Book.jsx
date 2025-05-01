import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

const Book = () => {
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/pay', {
        ...formData,
        paymentMethod,
      });

      Swal.fire('Payment Done!', 'Your payment was successful.', 'success');
    } catch (err) {
      Swal.fire('Error', 'Something went wrong.', 'error');
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6">Book</h2>
      <div className="bg-base-200 p-6 rounded-2xl shadow-md max-w-lg mx-auto">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} className="input input-bordered w-full" required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} className="input input-bordered w-full" required />
          <input type="text" name="service" placeholder="Service" onChange={handleChange} className="input input-bordered w-full" required />

          <div className="space-y-2">
            <p className="font-semibold">Pay with</p>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="payment" className="radio radio-primary" value="Credit Card" checked={paymentMethod === 'Credit Card'} onChange={() => setPaymentMethod('Credit Card')} />
                <span>💳 Credit Card</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="payment" className="radio radio-primary" value="Paypal" checked={paymentMethod === 'Paypal'} onChange={() => setPaymentMethod('Paypal')} />
                <span>🅿️ Paypal</span>
              </label>
            </div>
          </div>

          {paymentMethod === 'Credit Card' && (
            <>
              <input type="text" name="cardNumber" placeholder="Card Number" onChange={handleChange} className="input input-bordered w-full" />
              <div className="flex gap-4">
                <input type="text" name="expiry" placeholder="MM/YY" onChange={handleChange} className="input input-bordered w-full" />
                <input type="text" name="cvc" placeholder="CVC" onChange={handleChange} className="input input-bordered w-full" />
              </div>
            </>
          )}

          <div className="flex justify-between items-center mt-6">
            <p>Your Service charged will be <span className="font-bold text-black">$1000</span></p>
            <button type="submit" className="btn bg-pink-500 text-white hover:bg-pink-600">Pay</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Book;
