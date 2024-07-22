import { WifiIcon } from "@/media";
import { useState } from "react";

export function FollowButton({ className }: any) {
  const [display, setDisplay] = useState(false);

  return (
    <button
      onClick={() => {
        setDisplay(!display);
      }}
      className={`${className} flex gap-2 items-center rounded-full ${
        display
          ? "bg-gray-400 text-white dark:bg-[#2d3748]"
          : "bg-blue-500 text-white dark:bg-gray-500 "
      }`}>
      <h5>{display ? "Following" : "Follow"}</h5>
      <WifiIcon className="w-4 h-4" />
    </button>
  );
}
