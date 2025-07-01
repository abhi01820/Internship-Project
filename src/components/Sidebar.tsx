import React from "react";

const sidebarItems = [
  { label: "Dashboard", icon: "📊" },
  { label: "Sheets", icon: "📄" },
  { label: "Settings", icon: "⚙️" },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="h-screen w-20 md:w-56 bg-white border-r shadow-sm flex flex-col items-center py-6 sticky top-0">
      <h2 className="hidden md:block font-bold text-xl mb-10">Logo</h2>
      <nav className="flex flex-col gap-6 w-full">
        {sidebarItems.map((item) => (
          <button
            key={item.label}
            onClick={() => console.log(`${item.label} clicked`)}
            className="flex items-center gap-3 text-gray-600 hover:text-primary px-4 py-2 transition-all w-full text-left"
          >
            <span className="text-xl">{item.icon}</span>
            <span className="hidden md:inline text-sm font-medium">
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
