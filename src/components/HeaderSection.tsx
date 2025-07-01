import { FiChevronDown } from "react-icons/fi";

const HeaderSection = () => {
  return (
    <div className="bg-gray-100 text-sm font-semibold px-6 py-1 border-b flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-pink-600 text-xs bg-pink-100 px-2 py-0.5 rounded-full">📄</span>
        Q3 Financial Overview
        <FiChevronDown className="text-gray-500" />
      </div>

      <button
        className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-md"
        onClick={() => console.log("Add Column clicked")}
      >
        + New Action
      </button>
    </div>
  );
};

export default HeaderSection;
