import React from "react";
import clsx from "clsx";

type Props = {
  label: string;
};

const StatusChip: React.FC<Props> = ({ label }) => {
  const base =
    "px-3 py-1 text-xs font-semibold rounded-full inline-block whitespace-nowrap";

const colors: Record<string, string> = {
  "In-process": "bg-yellow-100 text-yellow-800",
  "Need to start": "bg-blue-100 text-blue-800",
  "Complete": "bg-green-100 text-green-800",
  "Blocked": "bg-red-100 text-red-800",
  "High": "bg-red-100 text-red-800",
  "Medium": "bg-orange-100 text-orange-800",
  "Low": "bg-sky-100 text-sky-800",
};


  return <span className={clsx(base, colors[label] || "bg-gray-200 text-gray-700")}>{label}</span>;
};

export default StatusChip;
