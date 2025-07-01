import React, { useState } from "react";

const tabs = ["All Orders", "Pending", "Reviewed", "Arrived"];

const FooterTabs: React.FC = () => {
  const [active, setActive] = useState("All Orders");

  return (
    <div className="flex justify-center gap-4 border-t px-4 py-2 bg-white fixed bottom-0 left-0 w-full z-30 shadow-inner">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => {
            console.log(`${tab} tab clicked`);
            setActive(tab);
          }}
          className={`px-4 py-1 text-sm font-medium rounded ${
            active === tab
              ? "bg-primary text-white"
              : "text-gray-600 hover:text-primary"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default FooterTabs;
