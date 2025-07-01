import React, { useState } from "react";

const tabs = ["All Orders", "Pending", "Reviewed", "Arrived"];

const FooterTabs: React.FC = () => {
  const [active, setActive] = useState("All Orders");

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-100 border-t border-gray-300 z-30">
      <div className="flex items-center px-2 py-1 gap-1 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              console.log(`${tab} tab clicked`);
              setActive(tab);
            }}
            className={`px-4 py-1.5 text-sm font-medium rounded-t-md transition-all duration-200
              ${
                active === tab
                  ? "bg-white border border-b-0 border-gray-300 shadow-sm"
                  : "text-gray-600 hover:bg-white hover:border hover:border-b-0 hover:shadow-sm"
              }`}
          >
            {tab}
          </button>
        ))}

        {/* + Add Sheet button */}
        <button
          onClick={() => console.log("Add New Sheet clicked")}
          className="ml-2 px-3 py-1.5 text-lg text-gray-500 hover:text-blue-600 hover:bg-white rounded transition"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default FooterTabs;
