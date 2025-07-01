import React from "react";

type AvatarProps = {
  name: string;
  src?: string;
};

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
};

const Avatar: React.FC<AvatarProps> = ({ name, src }) => {
  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className="w-8 h-8 rounded-full object-cover border shadow"
      />
    );
  }

  return (
    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white flex items-center justify-center text-xs font-bold shadow">
      {getInitials(name)}
    </div>
  );
};

export default Avatar;
