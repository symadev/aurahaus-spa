import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const imageFile = new FormData();
    imageFile.append('image', data.image[0]);

    try {
      const imgRes = await axios.post(image_hosting_api, imageFile, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (imgRes.data.success) {
        const newService = {
          name: data.name,
          description: data.description,
          image: imgRes.data.data.display_url,
        };

        const serviceRes = await axios.post('http://localhost:5000/services', newService);

        if (serviceRes.data.insertedId) {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: `${data.name} has been added!`,
            timer: 1500,
            showConfirmButton: false,
            position: 'top-end',
          });
          reset();
        }
      }
    } catch (err) {
      console.error(err);
      Swal.fire('Error', 'Something went wrong. Please try again.', 'error');
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
    

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-md shadow-2xl max-w-2xl mx-auto space-y-4"
      >
        {/* Service Name */}
        <div>
          <label className="block mb-1">Service Name</label>
          <input
            {...register('name', { required: true })}
            type="text"
            placeholder="Enter service name"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1">Description</label>
          <textarea
            {...register('description', { required: true })}
            placeholder="Enter description"
            className="w-full p-2 border rounded h-28 resize-none"
          ></textarea>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block mb-1">Upload Image</label>
          <input
            {...register('image', { required: true })}
            type="file"
            accept="image/*"
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded file:border-0
              file:text-sm file:font-semibold
              file:bg-gray-100 file:text-gray-700
              hover:file:bg-gray-200"
          />
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-600 to-pink-500 text-white px-4 py-2 rounded hover:from-pink-300 hover:to-pink-100 transition-all duration-300"
          >
            Add Service 💅
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
