import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center">
      <p>&copy; {new Date().getFullYear()} VideoConnect. All rights reserved.</p>
      <div className="mt-4 space-x-4">
        <a href="#" className="hover:text-blue-400">Twitter</a>
        <a href="#" className="hover:text-blue-400">LinkedIn</a>
        <a href="#" className="hover:text-blue-400">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
