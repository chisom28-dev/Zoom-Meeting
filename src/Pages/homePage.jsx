import React from "react";
import Header from "./NavBar.jsx";
import { Link } from "react-router-dom";
import {
  Video,
  Calendar,
  Contact,
  MessageSquare,
  ScreenShare,
  TrainFront,
} from "lucide-react";

const HomePage = () => {
  return (
    <div className="bg-[#142145] min-h-screen pb-10">
      <Header />

      {/* HERO SECTION */}
      <div className="text-center pt-32 px-4">
        <h1 className="font-bold mb-6 text-blue-600 leading-tight text-4xl sm:text-5xl md:text-6xl">
          Connect Globally,
          <br /> Meet Seamlessly
        </h1>

        <p className="text-lg sm:text-xl mb-8 text-white max-w-xl mx-auto px-2">
          Experience next-generation video conferencing with AI-powered features,
          real-time translation, and intelligent meeting management.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
          <Link to="/Meeting" className="bg-blue-600 flex gap-2 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
            <Video />
            Start Meeting
          </Link>

          <Link to="/ContactPage" className="bg-white flex gap-2 text-blue-900 px-6 py-3 rounded-md font-semibold hover:text-white hover:bg-blue-700 transition">
            View Contact
          </Link>
        </div>
      </div>

      {/* FEATURES GRID */}
      <div className="mt-16 w-[95%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          {
            icon: Video,
            title: "HD Video Conferencing",
            desc: "Crystal clear video calls with up to 100 participants",
          },
          {
            icon: Contact,
            title: "Contact Management",
            desc: "Organize and manage your contacts efficiently",
          },
          {
            icon: Calendar,
            title: "Smart Reminders",
            desc: "Never miss a meeting with automated reminders",
          },
          {
            icon: MessageSquare,
            title: "AI Chatbot",
            desc: "Get instant help from our intelligent assistant",
          },
          {
            icon: ScreenShare,
            title: "Screen Sharing",
            desc: "Share your screen seamlessly during calls",
          },
          {
            icon: TrainFront,
            title: "AI Translation",
            desc: "Real-time translation for global collaboration",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-lg flex flex-col gap-4 hover:scale-105 transition-transform"
          >
            <div className="bg-blue-600 w-fit text-white p-3 rounded-md">
              <item.icon className="h-6 w-6" />
            </div>

            <h2 className="font-bold text-white text-2xl">{item.title}</h2>

            <p className="text-white">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
