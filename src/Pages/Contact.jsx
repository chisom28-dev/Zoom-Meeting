import React from "react";
import NavBar from "./NavBar";
import { Search, Contact } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="bg-[#142145] min-h-screen pb-10">
      <NavBar />
      <section>
        <div className="w-[90%] max-w-6xl mx-auto flex flex-col gap-6 mt-[5vh]">
          
          {/* Header */}
          <div>
            <h1 className="text-blue-600 text-3xl md:text-4xl font-bold">Contact</h1>
            <p className="text-gray-400 font-semibold text-sm md:text-base">
              Manage Your Contacts and start instant meeting
            </p>
          </div>

          {/* Search and Add Button */}
          <div className="flex flex-col md:flex-row w-full gap-3 md:gap-4 justify-between">
            
            {/* Search */}
            <div className="flex w-full md:w-3/4 gap-3 py-2 px-4 md:px-5 bg-gray-900 rounded-2xl items-center">
              <Search className="text-gray-400 w-5 h-5 md:w-6 md:h-6" />
              <input
                placeholder="Search Contacts"
                className="w-full text-gray-400 outline-none bg-gray-900 placeholder-gray-500 text-sm md:text-base"
                type="text"
              />
            </div>

            {/* Add Contact Button */}
            <button className="flex w-full md:w-auto text-[14px] md:text-[15px] bg-blue-600 gap-2 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition items-center justify-center">
              <Contact className="w-4 h-4 md:w-5 md:h-5" />
              Add Contact
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
