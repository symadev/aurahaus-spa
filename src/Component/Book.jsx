import React, { useState } from 'react';

const Book = () => {
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6">Book</h2>
      <div className="bg-base-200 p-6 rounded-2xl shadow-md max-w-lg mx-auto">
        <form className="space-y-4">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Name"
            
            className="input input-bordered w-full"
          />

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            
            className="input input-bordered w-full"
          />

          {/* Service Input */}
          <input
            type="text"
            placeholder="Service"
           
            className="input input-bordered w-full"
          />

          {/* Payment Method */}
          <div className="space-y-2">
            <p className="font-semibold">Pay with</p>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  className="radio radio-primary"
                  value="Credit Card"
                  checked={paymentMethod === 'Credit Card'}
                  onChange={() => setPaymentMethod('Credit Card')}
                />
                <span className="flex items-center gap-1">
                  <span role="img" aria-label="credit-card">💳</span> Credit Card
                </span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  className="radio radio-primary"
                  value="Paypal"
                  checked={paymentMethod === 'Paypal'}
                  onChange={() => setPaymentMethod('Paypal')}
                />
                <span className="flex items-center gap-1">
                  <span role="img" aria-label="paypal">🅿️</span> Paypal
                </span>
              </label>
            </div>
          </div>

          {/* Card Number */}
          {paymentMethod === 'Credit Card' && (
            <>
              <input
                type="text"
                placeholder="Card Number"
                className="input input-bordered w-full"
              />
              {/* Expiry and CVC */}
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="input input-bordered w-full"
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="input input-bordered w-full"
                />
              </div>
            </>
          )}

          {/* Price and Pay Button */}
          <div className="flex justify-between items-center mt-6">
            <p>
              Your Service charged will be <span className="font-bold text-black">$1000</span>
            </p>
            <button className="btn bg-pink-500 text-white hover:bg-pink-600">
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Book;
