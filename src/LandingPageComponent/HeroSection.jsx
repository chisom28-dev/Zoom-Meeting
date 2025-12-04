import React from "react";

const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-black to-purple-800 text-white">
      <h1 className="text-5xl font-bold mb-6">Connect Instantly, Anywhere</h1>
      <p className="text-xl mb-8 max-w-xl">High-quality video meetings with screen sharing, chat, and recording, all in one platform.</p>
      <div className="space-x-4">
        <a href="/start" className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100">Start a Meeting</a>
        <a href="/join" className="px-6 py-3 border border-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">Join a Meeting</a>
      </div>
    </section>
  );
};

export default HeroSection;
