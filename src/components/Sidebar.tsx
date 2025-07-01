import React from "react";

const sidebarItems = [
  { label: "Dashboard", icon: "📊" },
  { label: "Sheets", icon: "📄" },
  { label: "Settings", icon: "⚙️" },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="h-screen w-20 md:w-56 bg-white border-r shadow-md flex flex-col items-center md:items-start py-6 px-2 sticky top-0">
      {/* Logo */}
      <div className="w-full flex justify-center md:justify-start px-2 mb-12">
        <img src="/logo.svg" alt="Logo" className="h-8 md:h-10" />
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-3 w-full">
        {sidebarItems.map((item) => (
          <button
            key={item.label}
            onClick={() => console.log(`${item.label} clicked`)}
            className="flex items-center gap-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-200 w-full"
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="hidden md:inline text-sm font-medium tracking-wide">
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
