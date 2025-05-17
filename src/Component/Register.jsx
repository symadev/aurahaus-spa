import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import Swal from 'sweetalert2';
import axios from 'axios'; // Add this import
import logo from '../assets/icons/purlor logo.png'

const Register = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);

    // Create user in Firebase Authentication
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        // Create user object for MongoDB
        const newUser = {
          name: data.name,
          email: data.email,
          role: 'user', // Set role to user for testing
          createdAt: new Date()
        };

        // Save user to MongoDB
        axios.post('http://localhost:5000/users', newUser)
          .then(res => {
            console.log("User saved to MongoDB:", res.data);

            // Reset form and show success message
            reset();
            Swal.fire({
              title: "Register Done",
              width: 600,
              padding: "3em",
              color: "#716add",
              background: "#fff url(/images/trees.png)",
              backdrop: `
                rgba(0,0,123,0.4)
                url("/images/nyan-cat.gif")
                left top
                no-repeat
              `
            });

            // Redirect user to the homepage after successful registration
            navigate('/');
          })
          .catch(err => {
            console.error("Error saving user to MongoDB:", err);
            Swal.fire('Error', 'Failed to save user data', 'error');
          });
      })
      .catch((error) => {
        console.error('Error creating user:', error);
        Swal.fire('Error', 'Something went wrong during registration', 'error');
      });
  };

  return (
    <>
      <div className="hero bg-base-200 min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="flex flex-col items-center py-6 space-y-2">
              <img src={logo} alt="Jerin's Parlour Logo" className="w-16 h-16" />
              <h2 className="text-xl font-bold">AuraHau’s <span className="text-pink-500">Spa</span></h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && <span>{errors.name.message}</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", { required: "Password is required" })}
                  placeholder="Password"
                  className="input input-bordered"
                />
                {errors.password && <span>{errors.password.message}</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  placeholder="Email"
                  className="input input-bordered"
                />
                {errors.email && <span>{errors.email.message}</span>}
              </div>

              <div className="form-control mt-6">
                <input
                  className="w-full btn btn-primary border-0 bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-200 text-white font-semibold py-2 rounded-lg shadow-md transition-all"
                  type="submit"
                  value="Register"
                />
              </div>

              <div className="divider text-sm">Or sign in with</div>
              <div className="flex justify-center space-x-4">
                <button
                  type="button"
                  className="btn btn-circle bg-pink-500 text-white hover:bg-gray-900"
                >
                  <FaFacebookF />
                </button>
                <button
                  type="button"
                  className="btn btn-circle bg-pink-500 text-white hover:bg-gray-900"
                >
                  <FaGoogle />
                </button>
                <button
                  type="button"
                  className="btn btn-circle bg-pink-500 text-white hover:bg-gray-900"
                >
                  <FaGithub />
                </button>
              </div>
            </form>

            <p className="text-center text-sm p-4">
              Already have an account?
              <Link to="/login" className="underline ml-1">Now login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;