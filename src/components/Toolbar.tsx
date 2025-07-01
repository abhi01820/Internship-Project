import React from "react";
import {
  FiGrid,
  FiEyeOff,
  FiSliders,
  FiFilter,
  FiLayout,
  FiUpload,
  FiDownload,
  FiSend,
  FiShare2,
} from "react-icons/fi";

const leftButtons = [
  { label: "Tool bar", icon: <FiGrid /> },
  { label: "Hide fields", icon: <FiEyeOff /> },
  { label: "Sort", icon: <FiSliders /> },
  { label: "Filter", icon: <FiFilter /> },
  { label: "Cell view", icon: <FiLayout /> },
];

const rightActions = [
  { label: "Import", icon: <FiUpload /> },
  { label: "Export", icon: <FiDownload /> },
  { label: "Send", icon: <FiSend /> },
  { label: "Share", icon: <FiShare2 /> },
];

const Toolbar: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-between items-center px-6 py-3 bg-white border-b sticky top-[64px] z-30 shadow-sm">
      {/* Left Buttons */}
      <div className="flex flex-wrap gap-2">
        {leftButtons.map((btn) => (
          <button
            key={btn.label}
            onClick={() => console.log(`${btn.label} clicked`)}
            className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1.5 rounded-md border flex items-center gap-2"
          >
            {btn.icon}
            {btn.label}
          </button>
        ))}
      </div>
      {/* Import/Export/Send/Share */}
        {rightActions.map((action) => (
          <button
            key={action.label}
            onClick={() => console.log(`${action.label} clicked`)}
            className="flex items-center gap-1 text-sm px-3 py-1.5 border border-gray-300 rounded-md bg-white hover:bg-gray-100 transition"
          >
            {action.icon}
            {action.label}
          </button>
        ))}

      {/* Right Section */}
      <div className="flex items-center gap-3 mt-2 sm:mt-0 flex-wrap justify-end">
        <input
          type="text"
          placeholder="Search within sheet"
          className="px-3 py-1.5 border text-sm rounded-md outline-none focus:ring focus:ring-primary"
        />

        <button
          className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-md"
          onClick={() => console.log("New Action clicked")}
        >
          + New Action
        </button>

        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-semibold text-sm shadow">
          JD
        </div>

        
      </div>
    </div>
  );
};

export default Toolbar;
