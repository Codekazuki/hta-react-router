import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const HomeLayOut = () => {
  return (
    <div className='container'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayOut;
