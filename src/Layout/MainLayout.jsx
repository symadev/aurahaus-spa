import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";


const MainLayout = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;