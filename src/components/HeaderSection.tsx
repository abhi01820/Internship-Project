import { FiChevronDown } from "react-icons/fi";

const HeaderSection = () => {
  return (
    <div className="bg-gray-100 text-sm font-semibold px-6 py-3 border-b flex items-center gap-2">
      <span className="text-pink-600 text-xs bg-pink-100 px-2 py-0.5 rounded-full">📄</span>
      Q3 Financial Overview
      <FiChevronDown className="ml-auto text-gray-500" />
    </div>
  );
};

export default HeaderSection;
