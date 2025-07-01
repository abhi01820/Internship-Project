import React from "react";

const avatarUrls = [
  "https://i.pravatar.cc/40?img=7",
  "https://i.pravatar.cc/40?img=8",
  "https://i.pravatar.cc/40?img=9",
];

const AvatarGroup: React.FC = () => {
  return (
    <div className="flex -space-x-3 pl-6 py-3">
      {avatarUrls.map((url, idx) => (
        <img
          key={idx}
          src={url}
          className="w-8 h-8 rounded-full border-2 border-white shadow"
          alt="user avatar"
        />
      ))}
    </div>
  );
};

export default AvatarGroup;
