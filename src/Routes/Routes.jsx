// routes/Routes.jsx
import {
  createBrowserRouter,

} from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../Component/Login";
import Register from "../Component/Register";
import Dashboard from "../Component/Dashboard";
import AddService from "../Component/AddService";
import MakeAdmin from "../Component/MakeAdmin";
import Book from "../Component/Book";
import ReviewForm from "../Component/ReviewForm";
import PrivateAdminRoute from "../Component/PrivateAdminRoute";
import BookingList from "../Component/bookingList";
import ManageBooking from "../Component/ManageBooking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/dashboard",
        element:<PrivateAdminRoute><Dashboard></Dashboard></PrivateAdminRoute>,
        children: [
           { index: true, element: <Book /> },
           //it show the dafault index route is book
          {
            path: "AddServices",
            element: <AddService></AddService>,
          },
          {
            path: "MakeAdmin",
            element: <MakeAdmin></MakeAdmin>,
          },
          {
            
            path: "Book",
            element: <Book></Book>,
          },
          {
            path: "bookingList",
            element:<BookingList></BookingList>,
          },
          {
            path: "ManageBooking",
            element:<ManageBooking></ManageBooking>,
          },
          {
            path: "Reviews",
            element: <ReviewForm></ReviewForm>,
          },
        ],
      },
    ],
  },
]);

export default router; 
