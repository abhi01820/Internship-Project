import React from "react";
import { FiDownload, FiUpload, FiSend, FiShare2 } from "react-icons/fi";

const actions = [
  { label: "Import", icon: <FiUpload /> },
  { label: "Export", icon: <FiDownload /> },
  { label: "Send", icon: <FiSend /> },
  { label: "Share", icon: <FiShare2 /> },
];

const ToolbarActions: React.FC = () => {
  return (
    <div className="flex justify-end px-6 pt-2 mt-2 pb-3 gap-3">
      {actions.map((action) => (
        <button
          key={action.label}
          onClick={() => console.log(`${action.label} clicked`)}
          className="flex items-center gap-1 text-sm px-3 py-1.5 border border-gray-300 rounded-md bg-white hover:bg-gray-100 transition"
        >
          {action.icon}
          {action.label}
        </button>
      ))}
    </div>
  );
};

export default ToolbarActions;
