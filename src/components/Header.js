import React, { useState, useRef, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "./../styles/Header.css";

const Header = ({ selectedProfile, onSwitchProfile }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const [searchQuery, setSearchQuery] = useState("");
const name = JSON.parse(localStorage.getItem("primeUser"))?.name;

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <header className="header bg-black text-white flex justify-between items-center px-6 py-4 shadow-lg z-50 sticky top-0">
      {/* Logo */}
      <div className="text-xl font-bold text-[#00A8E1]">PrimeClone</div>

      {/* Navigation Menu */}
      <nav className="hidden md:flex gap-6 text-sm font-medium">
        {["Home", "Movies", "TV Shows", "Live TV", "My Stuff", "Subscription"].map((item) => (
          <a key={item} href="#" className="hover:text-[#00A8E1] transition">
            {item}
          </a>
        ))}
      </nav>

      {/* Search + Profile */}
      <div className="flex items-center gap-4 relative" ref={dropdownRef}>
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="hidden md:block px-3 py-1 rounded-md bg-gray-800 text-white text-sm outline-none focus:ring-2 focus:ring-[#00A8E1]"
        />

        {/* Profile Icon and Dropdown */}
        <FaUserCircle
          className="text-2xl cursor-pointer hover:text-[#00A8E1]"
          onClick={() => setIsDropdownOpen((prev) => !prev)}
        />
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-50"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="p-3 border-b border-gray-300">
                <span className="font-semibold">{selectedProfile || "Guest"}</span>
              </div>
              <ul className="text-sm">
                <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Account Settings</li>
                <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Help</li>
                <li
                  className="hover:bg-gray-100 px-4 py-2 cursor-pointer text-red-500"
                  onClick={() => {
                    setIsDropdownOpen(false);
                    onSwitchProfile();
                  }}
                >
                  🔄 Switch Profile
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
