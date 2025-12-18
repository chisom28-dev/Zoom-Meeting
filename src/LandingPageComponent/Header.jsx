import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Video, User, LogIn, UserPlus, Home, Zap, Star, DollarSign } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "Features", path: "/features", icon: <Zap size={18} /> },
    { name: "Testimonials", path: "/testimonials", icon: <Star size={18} /> },
    { name: "Pricing", path: "/pricing", icon: <DollarSign size={18} /> },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-transparent backdrop-blur-lg shadow-lg py-2" 
        : "bg-linear-to-r from-blue-50 via-white to-purple-50 py-4"
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <Video className="text-white" size={24} />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-linear-to-r from-green-400 to-blue-500 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                VideoConnect
              </span>
              <span className="text-xs text-gray-500 font-medium">Seamless Video Calls</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  location.pathname === item.path
                    ? "bg-linear-to-r from-blue-50 to-purple-50 text-blue-600 font-semibold shadow-sm"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                <span className={`${location.pathname === item.path ? "text-blue-500" : "text-gray-400"}`}>
                  {item.icon}
                </span>
                <span>{item.name}</span>
                {location.pathname === item.path && (
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/login"
              className="flex items-center space-x-2 px-5 py-2.5 text-gray-600 hover:text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300 group"
            >
              <LogIn size={18} className="group-hover:translate-x-0.5 transition-transform" />
              <span className="font-medium">Login</span>
            </Link>
            <Link
              to="/signup"
              className="flex items-center space-x-2 px-6 py-2.5 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300"
            >
              <UserPlus size={18} />
              <span className="font-semibold">Sign Up Free</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-12 h-12 rounded-xl bg-linear-to-r from-blue-50 to-purple-50 flex items-center justify-center hover:shadow-md transition-shadow"
          >
            {open ? (
              <X className="text-gray-700" size={24} />
            ) : (
              <Menu className="text-gray-700" size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-2xl rounded-b-2xl border-t border-gray-100 transition-all duration-300 ${
        open 
          ? "opacity-100 translate-y-0 pointer-events-auto" 
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}>
        <div className="container mx-auto px-4 py-6">
          {/* Mobile Nav Items */}
          <div className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between p-4 rounded-xl transition-all ${
                  location.pathname === item.path
                    ? "bg-linear-to-r from-blue-50 to-purple-50 text-blue-600 font-semibold"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${
                    location.pathname === item.path 
                      ? "bg-linear-to-r from-blue-500 to-purple-500 text-white" 
                      : "bg-gray-100 text-gray-500"
                  }`}>
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.name}</span>
                </div>
                {location.pathname === item.path && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Auth Buttons */}
          <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center space-x-2 p-4 text-gray-600 border border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all group"
            >
              <LogIn size={18} className="group-hover:translate-x-0.5 transition-transform" />
              <span className="font-semibold">Login to Account</span>
            </Link>
            <Link
              to="/signup"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center space-x-2 p-4 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300"
            >
              <UserPlus size={18} />
              <span className="font-bold">Create Free Account</span>
            </Link>
          </div>

          {/* Mobile Footer */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="text-center text-sm text-gray-500">
              <p>Start your first video call in minutes</p>
              <p className="text-xs mt-1">No credit card required</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400"></div>
      )}
    </header>
  );
};

export default Header;