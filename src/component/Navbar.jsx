import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='about'>About US</NavLink>
      <NavLink to='contactus'>Contact Us</NavLink>
      <NavLink to='service'>Services</NavLink>
    </div>
  );
};

export default Navbar;
