import { useState, useEffect } from "react";
import { Sun, Moon, Video, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle dark mode at document level
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
      
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <div className="bg-blue-600 text-white p-2 rounded-md">
          <Video className="h-6 w-6" />
        </div>
        <Link to="/HomePage"><span className="text-blue-600 font-bold text-lg">VidConnect</span></Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-200 font-medium">
        <Link to="/Page" className="hover:text-blue-600">Contacts</Link>
        <Link to="/Meeting" className="hover:text-blue-600">Meetings</Link>
        <Link to="/Reminder" className="hover:text-blue-600">Reminders</Link>
      </nav>

      {/* Icons + Button */}
      <div className="hidden md:flex items-center space-x-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? (
            <Sun className="h-5 w-5 text-white" />
          ) : (
            <Moon className="h-5 w-5 text-gray-700" />
          )}
        </button>

        <button className="text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition">
          <Link to="/Meeting">
          Start Meeting 
          </Link>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md md:hidden px-6 py-4 space-y-4">
          < Link to="/ContactPage" className="block text-gray-700 dark:text-gray-200 hover:text-blue-600">Contacts</Link>
                  <Link to="/Meeting" className="block text-gray-700 dark:text-gray-200 hover:text-blue-600">Meetings</Link>
          <Link to="/Reminder" className="block text-gray-700 dark:text-gray-200 hover:text-blue-600">Reminders</Link>

          <div className="flex justify-between items-center pt-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-white" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </button>

            <button className="text-white bg-blue-600 px-4 py-2 rounded-md">
              Start Meeting
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
