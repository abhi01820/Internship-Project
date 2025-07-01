import React from "react";
import Avatar from "./Avatar";


const Toolbar: React.FC = () => {
  const buttons = ["Tool bar", "Hide fields", "Sort", "Filter", "Cell view"];

  return (
    <div className="flex justify-between items-center px-6 py-3 bg-white border-b sticky top-[64px] z-30">
      <div className="flex flex-wrap gap-2">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => console.log(`${btn} clicked`)}
            className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1.5 rounded-md border"
          >
            {btn}
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
        <Avatar name="John Doe" src="https://i.pravatar.cc/150?img=3" />
      </div>
    </div>
  );
};

export default Toolbar;
