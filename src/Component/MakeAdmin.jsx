import React, { useState } from 'react';

const MakeAdmin = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submit logic here
    console.log({ email });
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
              placeholder="jon@gamil.com"
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
