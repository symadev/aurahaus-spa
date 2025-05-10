import React from 'react';
import Swal from 'sweetalert2';

const ReviewForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Show SweetAlert success message
    Swal.fire({
      icon: 'success',
      title: 'Submitted!',
      text: 'Your review has been submitted successfully.',
      confirmButtonColor: '#ec4899',
    });
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6">Review</h2>
      <div className="bg-base-200 p-6 rounded-2xl shadow-md max-w-lg mx-auto">
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Input */}
          <input
            type="text"
            placeholder="Your name"
            className="input input-bordered w-full"
          />

          {/* Service Dropdown */}
          <select className="select select-bordered w-full" defaultValue="">
            <option disabled value="">
              Select service
            </option>
            <option>Anti Age Face Treatment</option>
            <option>Hair Color & Styleing</option>
            <option>Skin Care Treatment</option>
            <option>Pedicure</option>
          </select>

          {/* Description */}
          <textarea
            className="textarea textarea-bordered w-full h-32"
            placeholder="Description"
          ></textarea>

          {/* Submit Button */}
          <button type="submit" className="btn bg-pink-500 text-white hover:bg-pink-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
