import React from "react";
import NavBar from "./NavBar";
import { Plus } from "lucide-react";

const Reminder = () => {
  return (
    <div className="bg-[#142145] min-h-screen pb-10">
      <NavBar />
      <section className="w-[90%] max-w-6xl mx-auto mt-[5vh] flex flex-col gap-6 items-center justify-center">
        
        {/* Header */}
        <div>
          <h1 className="text-blue-600 text-3xl md:text-4xl font-bold">
            Event Reminders
          </h1>
          <p className="text-gray-400 font-semibold text-sm md:text-base">
            Schedule reminders for upcoming meetings and events
          </p>
        </div>

        {/* Reminder Card */}
        <div className="bg-[#1d283a] rounded-2xl w-full flex flex-col items-center px-4  justify-center py-6  gap-6">
          
          {/* Create Reminder Label */}
          <div className="flex items-center gap-3 md:gap-5">
            <Plus className="text-blue-600 w-5 h-5 md:w-6 md:h-6" />
            <p className="text-white text-lg md:text-[1.3rem] font-bold">
              Create Reminder
            </p>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-4 w-full md:w-2/3">
            
            <div>
              <p className="text-white mb-1">Event Title</p>
              <input
                className="w-full text-gray-400 py-2 pl-4 md:pl-5 rounded-2xl outline-none bg-gray-900 placeholder-gray-500 text-sm md:text-base"
                placeholder="e.g., Team Meeting"
                type="text"
              />
            </div>

            <div>
              <p className="text-white mb-1">Date</p>
              <input
                className="w-full text-gray-400 py-2 px-4 md:px-5 rounded-2xl outline-none bg-gray-900 placeholder-gray-500 text-sm md:text-base"
                type="date"
              />
            </div>

            <div>
              <p className="text-white mb-1">Time</p>
              <input
                className="w-full text-gray-400 py-2 pl-4 md:pl-5 rounded-2xl outline-none bg-gray-900 placeholder-gray-500 text-sm md:text-base"
                type="time"
              />
            </div>

            <div>
              <p className="text-white mb-1">Contacts (comma-separated)</p>
              <input
                className="w-full text-gray-400 py-2 pl-4 md:pl-5 rounded-2xl outline-none bg-gray-900 placeholder-gray-500 text-sm md:text-base"
                type="text"
                placeholder="e.g., Chisom, Abel"
              />
            </div>

            <button className="flex w-full md:w-auto text-[14px] md:text-[15px] bg-blue-600 gap-2 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition items-center justify-center">
              <Plus className="w-4 h-4 md:w-5 md:h-5" />
              Add Reminder
            </button>

          </form>
        </div>
      </section>
    </div>
  );
};

export default Reminder;
