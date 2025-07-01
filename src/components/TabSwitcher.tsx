import React, { useState } from "react";

const tabs = ["All", "Engineering", "Design", "Product", "HR"];

const TabSwitcher: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="bg-white sticky top-[4px] z-40 shadow-sm px-4">
      <div className="flex gap-2 overflow-x-auto border-b pt-1 pb-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              console.log(`${tab} tab clicked`);
              setActiveTab(tab);
            }}
            className={`relative px-4 py-2 text-sm font-medium transition-all rounded-t-md
              ${
                activeTab === tab
                  ? "text-blue-600 bg-blue-50 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full animate-slideIn" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabSwitcher;
