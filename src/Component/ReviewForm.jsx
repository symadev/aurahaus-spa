import React from 'react';

const ReviewForm = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6">Review</h2>
      <div className="bg-base-200 p-6 rounded-2xl shadow-md max-w-lg mx-auto">
        <form className="space-y-4">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Your name"
            className="input input-bordered w-full"
          />

          {/* Company Name / Designation */}
          <input
            type="text"
            placeholder="Company's name, Designation"
            className="input input-bordered w-full"
          />

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
