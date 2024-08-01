"use client";

import { FC, useState } from "react";
import { IoIosRadio } from "react-icons/io";

type Props = {
  className?: string;
  // locale: Locales;
};

export const SearchBarSC: FC<Props> = ({ className }) => {
  const [clicked, setClicked] = useState("All");

  return (
    <>
      <div className="w-full flex flex-row justify-between bg-[#333] text-[#ccc] px-4">
        <div className="w-full max-w-2xl m-auto">
          <input
            className="w-full p-1 rounded bg-gray-200 text-black"
            placeholder="Search"
          />
        </div>
      </div>
    </>
  );
};
