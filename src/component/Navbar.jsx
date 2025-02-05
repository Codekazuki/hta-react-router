import { NavLink } from "react-router-dom";
import "../assets/styles/nav.css";
const Navbar = () => {
  return (
    <div className='my-navigation'>
      <NavLink className='home-button' to='/'>
        Home
      </NavLink>
      <NavLink to='about'>About US</NavLink>
      <NavLink to='contactus'>Contact Us</NavLink>
      <NavLink to='service'>Services</NavLink>
    </div>
  );
};

export default Navbar;
