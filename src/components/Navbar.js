import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaSearch } from "react-icons/fa";

const Navbar = ({ selectedProfile, onLogout }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const toggleDropdown = () => setShowMenu(!showMenu);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for "${searchTerm}"`);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[#0F171E] text-white shadow-md relative">
      {/* Left side navigation */}
      <div className="flex items-center gap-6 text-sm sm:text-base font-light">
        <span className="text-xl font-semibold">prime video</span>

        <Link
          to="/home"
          className="px-3 py-1 rounded-md transition duration-200 hover:bg-white hover:text-black"
        >
          Home
        </Link>

        <Link
          to="/movies"
          className="px-3 py-1 rounded-md transition duration-200 hover:bg-white hover:text-black"
        >
          Movies
        </Link>

        <Link
          to="/tvshows"
          className="px-3 py-1 rounded-md transition duration-200 hover:bg-white hover:text-black"
        >
          TV Shows
        </Link>

        <Link
          to="/livetv"
          className="px-3 py-1 rounded-md transition duration-200 hover:bg-white hover:text-black"
        >
          Live TV
        </Link>

        <Link
          to="/subscriptions"
          className="px-3 py-1 rounded-md transition duration-200 hover:bg-white hover:text-black"
        >
          Subscriptions
        </Link>


      </div>

      {/* Search Bar */}
      <form
        onSubmit={handleSearchSubmit}
        className="hidden sm:flex items-center bg-[#1F2A38] rounded overflow-hidden ml-6"
      >
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent outline-none px-3 py-1 text-white placeholder-gray-400"
        />
        <button type="submit" className="px-3 text-gray-400 hover:text-white">
          <FaSearch />
        </button>
      </form>

      {/* Profile and Dropdown */}
      <div
        className="relative flex items-center gap-2 cursor-pointer ml-6"
        onClick={toggleDropdown}
      >
        <span className="hidden sm:inline text-sm text-gray-300">
          Hi, {selectedProfile}
        </span>
        <FaUserCircle size={28} className="text-white hover:text-gray-300" />
        {showMenu && (
          <div className="absolute top-12 right-0 bg-[#1F2A38] text-sm rounded shadow-lg py-2 z-10 w-48">
            {[
              { label: "Manage Profiles", href: "/profiles" },
              { label: "Account", href: "/account" },
              { label: "Settings", href: "/settings" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block px-4 py-2 rounded-md transition duration-200 hover:bg-white hover:text-black"
                onClick={() => setShowMenu(false)}
              >
                {item.label}
              </Link>
            ))}

            <hr className="border-gray-600 my-1" />

            <button
              onClick={onLogout}
              className="w-full text-left px-4 py-2 rounded-md transition duration-200 hover:bg-white hover:text-black"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
