import React, { useState } from "react";

const tabs = ["All", "Engineering", "Design", "Product", "HR"];

const TabSwitcher: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="flex gap-2 border-b px-6 pt-4 bg-white sticky top-[108px] z-30">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => {
            console.log(`${tab} tab clicked`);
            setActiveTab(tab);
          }}
          className={`px-4 py-2 text-sm font-medium rounded-t-lg border-b-2 transition-colors ${
            activeTab === tab
              ? "text-primary border-primary bg-gray-100"
              : "text-gray-600 border-transparent hover:text-primary"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabSwitcher;
