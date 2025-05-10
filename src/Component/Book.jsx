import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Book = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6">Book a Treatment</h2>
      <div className="bg-base-200 p-6 rounded-2xl shadow-md max-w-lg mx-auto">
        <form className="space-y-4">
          <input type="text" name="name" placeholder="Name" onChange={handleChange} className="input input-bordered w-full" required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} className="input input-bordered w-full" required />
          <input type="text" name="service" placeholder="Service" onChange={handleChange} className="input input-bordered w-full" required />
        </form>

        <Elements stripe={stripePromise}>
          <CheckoutForm formData={formData} />
        </Elements>
      </div>
    </div>
  );
};

export default Book;
