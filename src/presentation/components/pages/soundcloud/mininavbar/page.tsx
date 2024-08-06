"use client";

import { Locales } from "@/infraestructure/interfaces";
import { FC, useState } from "react";
import { IoIosRadio } from "react-icons/io";

type Props = {
  className?: string;
  locale: Locales;
};

const Navitems = ["All", "Popular Tracks", "Tracks", "Playlists"];

export const MiniNavSoundCloud: FC<Props> = ({ className, locale }) => {
  const [clicked, setClicked] = useState("All");
  const [following, setFollowing] = useState(false);

  return (
    <>
      <div className="px-4 flex flex-col items-center sm:flex-row lg:flex-col xl:flex-row sm:justify-between pt-4 border-b border-gray-100 dark:border-gray-600">
        <ul className="flex flex-row gap-8 px-4 ">
          {Navitems.map((item) => {
            return (
              <li
                key={item}
                className={`${
                  clicked === item
                    ? "border-b-2 border-b-orange-400 text-orange-400"
                    : "hover:border-b-2 hover:border-b-black dark:hover:border-b-white"
                } whitespace-nowrap text-lg md:text-xl lg:text-2xl font-medium cursor-pointer`}
                onClick={() => setClicked(item)}>
                {item}
              </li>
            );
          })}
        </ul>
        <div className="flex flex-row py-2 gap-1">
          <button
            className={`${
              following && "bg-orange-500 text-white"
            } border px-3 py-1 rounded-md flex flex-row items-center gap-2`}
            onClick={() => {
              setFollowing(!following);
            }}>
            <IoIosRadio />
            {following ? "Following" : "Follow"}
          </button>
          <button
            className="border px-3 py-1 rounded-sm flex flex-row items-center gap-2"
            onClick={() => {}}>
            <IoIosRadio />
            Station
          </button>
        </div>
      </div>
    </>
  );
};
