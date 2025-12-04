import React from "react";
import LoginIn from "../Authetication/LoginIn";
import SignUp from "../Authetication/signup";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md fixed w-full z-50">
      <div className="text-2xl font-bold text-blue-600">VideoConnect</div>
      <nav className="space-x-6">
        <Link to="/features" className="hover:text-blue-600">Features</Link>
        <Link to="/testimonials" className="hover:text-blue-600">Testimonials</Link>
        <Link to="/pricing" className="hover:text-blue-600">Pricing</Link>
        <Link to="/login" className="px-4 py-2 border rounded hover:bg-blue-600 hover:text-white">Login</Link>
        <Link to="/signup" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Sign Up</Link>
      </nav>
    </header>
  );
};

export default Header;
