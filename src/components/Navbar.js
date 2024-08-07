import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center gap-5 h-14 bg-black/10 navbar">
      <Link to="/">Home</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/enrollment">Enrollment</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
};

export default Navbar;
