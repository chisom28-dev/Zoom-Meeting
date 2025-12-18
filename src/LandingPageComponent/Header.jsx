import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center p-6">
        <Link to="/">
          <div className="text-2xl font-bold text-blue-600">VideoConnect</div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center justify-center">
          <Link to="/features" className="hover:text-blue-600">Features</Link>
          <Link to="/testimonials" className="hover:text-blue-600">Testimonials</Link>
          <Link to="/pricing" className="hover:text-blue-600">Pricing</Link>

          <Link
            to="/login"
            className="px-4 py-2 border rounded hover:bg-blue-600 hover:text-white"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Sign Up
          </Link>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden flex flex-col px-6 pb-4 space-y-4 bg-white shadow">
          <Link
            to="/features"
            className="hover:text-blue-600"
            onClick={() => setOpen(false)}
          >
            Features
          </Link>
          <Link
            to="/testimonials"
            className="hover:text-blue-600"
            onClick={() => setOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            to="/pricing"
            className="hover:text-blue-600"
            onClick={() => setOpen(false)}
          >
            Pricing
          </Link>

          <Link
            to="/login"
            className="px-4 py-2 border rounded hover:bg-blue-600 hover:text-white"
            onClick={() => setOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => setOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
