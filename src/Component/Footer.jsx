import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-pink-500 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Address */}
        <div>
          <div className="flex items-start space-x-2">
            <span className="text-xl">📍</span>
            <div>
              <p>H#000 (0th Floor), Road #00,</p>
              <p>New DOHS, Mohakhali, Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-bold text-lg mb-2">Company</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Project</a></li>
            <li><a href="#" className="hover:underline">Our Team</a></li>
            <li><a href="#" className="hover:underline">Terms Conditions</a></li>
            <li><a href="#" className="hover:underline">Submit Listing</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Quick Links</a></li>
            <li><a href="#" className="hover:underline">Rentals</a></li>
            <li><a href="#" className="hover:underline">Sales</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Our blog</a></li>
          </ul>
        </div>

        {/* About and Socials */}
        <div>
          <h3 className="font-bold text-lg mb-2">About us</h3>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet...
          </p>
          <div className="flex space-x-4 text-xl">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
