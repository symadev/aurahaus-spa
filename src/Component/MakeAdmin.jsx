import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const MakeAdmin = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem('access-token'); // or wherever you store your JWT

    if (!token) {
      return Swal.fire('Unauthorized', 'You must be logged in as admin', 'error');
    }

    axios.put('http://localhost:5000/users/admin', { email }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      if (res.data.success) {
        Swal.fire('Success', 'User promoted to admin', 'success');
        setEmail('');
      } else {
        Swal.fire('Info', res.data.message || 'No changes made', 'info');
      }
    })
    .catch(err => {
      Swal.fire('Error', err.response?.data?.message || 'Failed to promote user', 'error');
    });
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6">Make Admin</h2>
      <form onSubmit={handleSubmit} className="bg-base-200 p-6 rounded-2xl shadow-md">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="user@example.com"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mt-4 md:mt-9">
            <button type="submit" className="btn bg-pink-500 hover:bg-pink-600 text-white">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MakeAdmin;
