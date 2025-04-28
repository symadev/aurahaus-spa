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
            path: "Reviews",
            element: <ReviewForm></ReviewForm>,
          },
        ],
      },
    ],
  },
]);

export default router; 
