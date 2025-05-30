import { FaBook, FaHome,  FaServicestack, } from "react-icons/fa";
import { FaFirstOrderAlt,  FaPeopleGroup, FaReadme, FaTableList, } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

import logo from '../assets/icons/purlor logo.png'

const Dashboard = () => {


  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 min-h-screen bg-white shadow-lg border-r">
        <div className="flex flex-col items-center py-6 space-y-2">
          <img src={logo} alt="Jerin's Parlour Logo" className="w-16 h-16" />
          <h2 className="text-xl font-bold">AuraHau’s <span className="text-pink-500">Spa</span></h2>
        </div>

        <ul className="menu px-4 text-sm space-y-2 font-medium">
        <li>
            <NavLink to="/dashboard/Book" className="flex items-center gap-3 text-pink-500 hover:text-pink-500">
              <FaFirstOrderAlt /> Book
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookingList" className="flex items-center gap-3 text-gray-600 hover:text-pink-500">
              <FaBook /> Booking List
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/AddServices" className="flex items-center gap-3 text-gray-600 hover:text-pink-500">
              <FaServicestack /> Add service
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/ManageBooking" className="flex items-center gap-3 text-gray-600 hover:text-pink-500">
              <FaTableList/> Manage Booking
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/MakeAdmin" className="flex items-center gap-3 text-gray-600 hover:text-pink-500">
              <FaPeopleGroup /> Make Admin
            </NavLink>
          </li>

          
          <li>
            <NavLink to="/dashboard/Reviews" className="flex items-center gap-3 text-gray-600 hover:text-pink-500">
              <FaReadme /> Review
            </NavLink>
          </li>

          <div className="divider my-4" />

          <li>
            <NavLink to="/" className="flex items-center gap-3 text-gray-600 hover:text-pink-500">
              <FaHome /> Home
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Dashboard Content */}
      <div className="flex-1 p-6 bg-gray-50 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;