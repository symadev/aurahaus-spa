import { useEffect, useState } from 'react';
import axios from 'axios';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('access-token'); // Get the JWT from localStorage

    if (!token) {
      setError('No access token found. Please log in.');
      setLoading(false);
      return;
    }

    axios.get('http://localhost:5000/bookingList', {
      headers: {
        Authorization: `Bearer ${token}`, // Correct token inclusion with backticks for interpolation
      },
    })
    .then(res => {
      setBookings(res.data); // Set the fetched bookings
      setLoading(false); // Done loading
    })
    .catch(err => {
      console.error("Booking fetch error:", err);
      setError('Failed to load bookings. Please try again later.');
      setLoading(false); // Done loading
    });
  }, []);

  if (loading) return <p>Loading bookings...</p>;

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>} {/* Display any errors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {bookings.map(booking => (
          <div
            key={booking._id}
            className="bg-white p-4 rounded-lg shadow border border-gray-200"
          >
            <h2 className="text-lg font-bold text-pink-600">{booking.treatment}</h2>
            <p><strong>Email:</strong> {booking.email}</p>
            <p><strong>Transaction ID:</strong> {booking.transactionId}</p>
            <p><strong>Amount:</strong> ${(booking.price / 100).toFixed(2)}</p>
            <p><strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingList;
