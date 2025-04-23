import { Link } from "react-router-dom";
import image from '../assets/icons/purlor logo.png'

const Navbar = () => {
  return (
    <div className="bg-[#FFF8F5] shadow-sm navbar fixed z-10 bg-opacity-30 text-white max-w-screen-xl p-2 h-8 ">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="  flex items-center gap-2">
        <img  className ="w-14"src={image} alt="" />
          <div>
            <h1 className="text-3xl font-bold text-gray-800 leading-4">AuraHaus <span className="text-2xl font-bold text-pink-500  ">Spa</span></h1>
           
          </div>
        </div>

        {/* Menu */}
        <div className="hidden md:flex gap-8 items-center text-pink-500 font-semibold">
          <Link to="/" className="hover:text-pink-500   btn btn-ghost">HOME</Link>
          
          <Link to="/dashboard" className="hover:text-pink-500 btn btn-ghost ">DASHBOARD</Link>
        
          <div>
          <Link to="/login">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition">
              Login
            </button>
          </Link>
        </div>
        </div>

        {/* Login Button */}
        
      </div>
    </div>
  );
};

export default Navbar;
