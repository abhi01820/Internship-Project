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
    <div className="flex flex-wrap justify-between items-center px-2 py-1 bg-white border-b sticky top-[6px] z-30 shadow-sm">
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

      {/* Right Actions aligned right */}
      <div className="flex gap-2 ml-auto">
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
      </div>
    </div>
  );
};

export default Toolbar;
