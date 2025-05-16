// BookingList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BookingList() {
  const [payments, setPayments] = useState([]);



  useEffect(() => {
    const token = localStorage.getItem('access-token');


    
    axios.get('http://localhost:5000/bookingList', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(response => {
      console.log('API response:', response.data);
setPayments(Array.isArray(response.data) ? response.data : []);

    }).catch(err => {
      console.error('API call failed:', err);
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold mb-4">Your Booked Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {payments.map(payment => (
          <div key={payment._id} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-bold mb-2 text-pink-500">{payment.service}</h3>
            <p><strong>User:</strong> {payment.name}</p>
            <p><strong>Email:</strong> {payment.email}</p>
            <p><strong>Transaction ID:</strong> {payment.transactionId}</p>
            <p><strong>Price:</strong> ${payment.price}</p>
            <p><strong>Date:</strong> {new Date(payment.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookingList;
