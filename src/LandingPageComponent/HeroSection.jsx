import React from "react";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-black to-purple-800 text-white">
      <h1 className="text-5xl font-bold mb-6">Connect Instantly, Anywhere</h1>
      <p className="text-xl mb-8 max-w-xl">High-quality video meetings with screen sharing, chat, and recording, all in one platform.</p>
      <div className="space-x-4">
        <Link to="/signup" className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100">Get Started</Link>

      </div>
    </section>
  );
};

export default HeroSection;
