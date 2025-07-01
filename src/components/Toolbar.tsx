import React from "react";
import {
  FiGrid,
  FiEyeOff,
  FiSliders,
  FiFilter,
  FiLayout,
} from "react-icons/fi";

const buttons = [
  { label: "Tool bar", icon: <FiGrid /> },
  { label: "Hide fields", icon: <FiEyeOff /> },
  { label: "Sort", icon: <FiSliders /> },
  { label: "Filter", icon: <FiFilter /> },
  { label: "Cell view", icon: <FiLayout /> },
];

const Toolbar: React.FC = () => {
  return (
    <div className="flex justify-between items-center px-6 py-3 bg-white border-b sticky top-[64px] z-30">
      <div className="flex flex-wrap gap-2">
        {buttons.map((btn) => (
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

      <div className="flex items-center gap-4">
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
