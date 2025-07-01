// src/components/Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full px-4 py-3 bg-white shadow-md flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-semibold text-gray-800">
        My Spreadsheet App
      </h1>
      <div className="flex gap-4">
        <button
          className="text-sm text-gray-600 hover:text-primary"
          onClick={() => console.log("Settings clicked")}
        >
          Settings
        </button>
        <button
          className="text-sm text-gray-600 hover:text-primary"
          onClick={() => console.log("Profile clicked")}
        >
          Profile
        </button>
      </div>
    </header>
  );
};

export default Header;
