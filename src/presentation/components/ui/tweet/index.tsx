import { PinIcon } from "../../../../../public/svgs";

import React, { useState } from "react";
import ProfilePic from "../image/page";
import {
  FaRegComment,
  FaHeart,
  FaRegHeart,
  FaBookmark,
  FaRegBookmark,
} from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { IoStatsChartOutline } from "react-icons/io5";
import { IoStatsChart } from "react-icons/io5";
import { FiShare } from "react-icons/fi";

type Props = {
  className?: string;
  pinned?: boolean;
  date: string;
  children: any;
  likes: number;
  comments: number;
  reposts: number;
  saves: number;
};

const INTERACTIONS = [
  {
    icon: <FaRegComment />,
    clicked: <FaComment />,
    text: "Comments",
    key: "comments",
    color: "rgba(26, 155, 240, 0.5)",
    colorText: "rgba(26, 155, 240)",
  },
  {
    icon: <AiOutlineRetweet />,
    clicked: <AiOutlineRetweet />,
    text: "Reposts",
    key: "reposts",
    color: "rgba(0, 186, 124, 0.5)",
    colorText: "rgba(0, 186, 124)",
  },
  {
    icon: <FaRegHeart />,
    clicked: <FaHeart />,
    text: "Likes",
    key: "likes",
    color: "rgba(249, 24, 128, 0.5)",
    colorText: "rgba(249, 24, 128",
  },
  {
    icon: <IoStatsChartOutline />,
    clicked: <IoStatsChart />,
    text: "Stats",
    key: "stats",
    color: "rgba(255, 165, 0, 0.2)",
    colorText: "rgba(255, 165, 0)",
  },
  {
    icon: <FaRegBookmark />,
    clicked: <FaBookmark />,
    text: "Bookmark",
    key: "bookmark",
    color: "rgba(128, 0, 128, 0.2)",
    colorText: "rgba(128, 0, 128)",
  },
  {
    icon: <FiShare />,
    clicked: <FiShare />,
    text: "Share",
    key: "share",
    color: "rgba(255, 215, 0, 0.2)",
    colorText: "rgba(255, 215, 0)",
  },
];

function Tweet({
  className,
  pinned,
  date,
  children,
  likes,
  comments,
  reposts,
  saves,
}: Props) {
  const counts: any = { likes, comments, reposts, saves };

  return (
    <div className={className}>
      <article className="transition-all duration-200 border-b border-slate-300 dark:border-gray-600 grid grid-cols-[auto_1fr] gap-2 p-4 hover:bg-gray-100 dark:hover:bg-slate-700">
        {pinned && (
          <div className="grid justify-end items-center">
            <PinIcon className="w-2.5 h-2.5 text-gray-500" />
          </div>
        )}
        {pinned && <p className="text-xs">Pinned Tweet</p>}
        <ProfilePic small />
        <div>
          <div className="flex items-center gap-2">
            <h5 className="text-md font-semibold">Benja Henley</h5>
            <span>•</span>
            <time className="text-xs text-gray-700 dark:text-white">
              {date}
            </time>
          </div>
          <div className="overflow-hidden">{children}</div>
          <ul className="mt-3 flex justify-around w-full max-w-lg mx-auto">
            {INTERACTIONS.slice(0, 4).map(
              ({ icon, clicked, text, key, color, colorText }, unit) => {
                const [interacted, setInteracted] = useState(false);
                const [hovered, setHovered] = useState(false);
                return (
                  <li
                    key={text}
                    className={`flex items-center gap-1 cursor-pointer`}
                    onClick={() => setInteracted(!interacted)}>
                    <p
                      style={{
                        backgroundColor: hovered ? color : "",
                        color: hovered ? colorText : "",
                      }}
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      className={`${
                        unit === 1 ? "text-lg" : "text-md "
                      } p-2 rounded-full`}>
                      {interacted ? clicked : icon}
                    </p>
                    <p style={{ color: hovered ? colorText : "" }}>
                      {counts[key]}
                    </p>
                  </li>
                );
              }
            )}
            <div className="flex flex-row">
              {INTERACTIONS.slice(4).map(
                ({ icon, clicked, text, key, color, colorText }, unit) => {
                  const [interacted, setInteracted] = useState(false);
                  const [hovered, setHovered] = useState(false);
                  return (
                    <li
                      key={text}
                      className={`flex items-center gap-1 cursor-pointer`}
                      onClick={() => setInteracted(!interacted)}>
                      <p
                        style={{
                          backgroundColor: hovered ? color : "",
                          color: hovered ? colorText : "",
                        }}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        className={`${
                          unit === 1 ? "text-lg" : "text-md "
                        } p-2 rounded-full`}>
                        {interacted ? clicked : icon}
                      </p>
                    </li>
                  );
                }
              )}
            </div>
            {}
          </ul>
        </div>
      </article>
    </div>
  );
}

export default Tweet;
