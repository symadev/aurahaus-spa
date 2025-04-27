import React, { useState } from 'react';
import { FaPhotoFilm } from 'react-icons/fa6';

const AddService = () => {
  const [serviceTitle, setServiceTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submit logic here
    console.log({ serviceTitle, description, image });
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6">Add service</h2>
      <form onSubmit={handleSubmit} className="bg-base-200 p-6 rounded-2xl shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="label">
              <span className="label-text">Service Title</span>
            </label>
            <input
              type="text"
              placeholder="Enter title"
              className="input input-bordered w-full"
              value={serviceTitle}
              onChange={(e) => setServiceTitle(e.target.value)}
            />
            
            <label className="label mt-4">
              <span className="label-text">Description</span>
            </label>
            <textarea
              placeholder="Enter Designation"
              className="textarea textarea-bordered w-full"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="flex justify-center items-center gap-2">
  <FaPhotoFilm className="text-pink-400 text-2xl" />
  <input
    type="file"
    className="file-input file-input-bordered file-input-pink-400 w-full max-w-xs"
    onChange={handleImageChange}
  />
</div>

        </div>

        <div className="flex justify-end mt-6">
          <button type="submit" className="btn bg-pink-500 hover:bg-pink-600 text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
