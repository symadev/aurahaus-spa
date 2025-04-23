import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";


const MainLayout = () => {

    
    const  location = useLocation()
    console.log(location);
    const noHeaderFooter =location.pathname.includes('login') ||location.pathname.includes('register')||location.pathname.includes('dashboard')
    return (
        <div className="max-w-screen-xl mx-auto">
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
           {noHeaderFooter || <Footer></Footer>}
            
        </div>
    );
};

export default MainLayout;