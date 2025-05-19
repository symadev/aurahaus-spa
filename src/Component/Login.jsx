import { useContext } from 'react';
import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from '../Provider/AuthContext';
import Swal from 'sweetalert2';
import logo from '../assets/icons/purlor logo.png'


const Login = () => {
    const { signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        

    signIn(email, password)
  .then((result) => {
    Swal.fire({
      title: "Login Successful",
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
    navigate(from, { replace: true });
  })
  .catch((error) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.message,
    });
  });

          
    };

    return (
        <> 
            
         
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="flex flex-col items-center py-6 space-y-2">
          <img src={logo} alt="Jerin's Parlour Logo" className="w-16 h-16" />
          <h2 className="text-xl font-bold">AuraHau’s <span className="text-pink-500">Spa</span></h2>
        </div>

                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input
                                    className="w-full btn btn-primary  border-0 bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-semibold py-2 rounded-lg shadow-md transition-all"
                                    type="submit"
                                    value="Login"
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
                            New here?
                            <Link to='/register' className='underline ml-1'>
                                Create a New Account
                            </Link>
                        </p>
                      
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default Login;
