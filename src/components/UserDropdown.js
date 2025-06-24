import React from "react";
import { FaPlusCircle } from "react-icons/fa";

const UserDropdown = ({ onClose }) => {
  return (
    <div className="absolute top-16 right-6 w-64 bg-[#1c1c1e] text-white shadow-lg rounded-lg z-50 p-4">
      <div className="mb-4">
        <p className="text-sm font-bold mb-2">YOUR ACCOUNT</p>
        <ul className="text-sm space-y-1">
          <li className="hover:text-gray-300 cursor-pointer">Help</li>
          <li className="hover:text-gray-300 cursor-pointer">Watch Anywhere</li>
          <li className="hover:text-gray-300 cursor-pointer">Account & Settings</li>
          <li className="hover:text-gray-300 cursor-pointer">Sign out</li>
        </ul>
      </div>

      <div>
        <p className="text-sm font-bold mb-2">PROFILES</p>
        <ul className="text-sm space-y-2">
          <li className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
            <div className="w-5 h-5 bg-pink-600 rounded-full"></div>
            Janu
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
            <div className="w-5 h-5 bg-green-500 rounded-full"></div>
            Bruno
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
            <FaPlusCircle />
            Add new
          </li>
          <li className="text-sm text-gray-400 mt-2 hover:text-gray-300 cursor-pointer">
            Manage profiles
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserDropdown;
