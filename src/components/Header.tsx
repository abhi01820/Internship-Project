import React, { useState } from "react";
import { FiBell } from "react-icons/fi";

const Header: React.FC = () => {
  const [hasNotification, setHasNotification] = useState(true);

  return (
    <header className="w-full px-3 py-2 bg-white shadow-md flex justify-between items-center sticky top-0 z-50">
      {/* Title */}
      <h1 className="text-xl font-semibold text-gray-800">
        <span className="text-gray-400">
          Workspace &gt;&gt; Folder2 &gt;&gt;{" "}
        </span>
        <span className="text-gray-800 font-semibold">Spreadsheet-3</span>
      </h1>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="hidden sm:flex items-center gap-3">
          <input
            type="text"
            placeholder="Search within sheet"
            className="px-3 py-1.5 border text-sm rounded-md outline-none focus:ring focus:ring-primary"
          />
        </div>

        {/* Notification */}
        <button
          onClick={() => {
            setHasNotification(false);
            console.log("Notifications clicked");
          }}
          className="relative p-2 rounded-full hover:bg-gray-100 transition"
        >
          <FiBell className="text-xl text-gray-700" />
          {hasNotification && (
            <>
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500" />
            </>
          )}
        </button>

        {/* Settings */}
        <button
          className="text-sm text-gray-600 hover:text-primary"
          onClick={() => console.log("Settings clicked")}
        >
          Settings
        </button>

        {/* Profile */}
        <button
          className="text-sm text-gray-600 hover:text-primary"
          onClick={() => console.log("Profile clicked")}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-semibold text-sm shadow">
            JD
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
