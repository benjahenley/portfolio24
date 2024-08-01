"use client";

import { FC, useState } from "react";
import { IoIosRadio } from "react-icons/io";
import { SearchBarSC } from "../searchbar/page";
import { FaSoundcloud } from "react-icons/fa";
import logoSc from "@/media/soundcloudPNG.png";
import Image from "next/image";
import Link from "next/link";
import { ScButtonOne } from "../../sc-button/page";
import { InteractivesSC } from "../../interactives/page";

type Props = {
  className?: string;
  // locale: Locales;
};

const Navitems = [
  { name: "Home", href: "/" },
  { name: "Feed", href: "/" },
  { name: "Projects", href: "/" },
];

export const NavBarSC: FC<Props> = ({ className }) => {
  const [clicked, setClicked] = useState("");

  return (
    <>
      <div className="hidden md:flex flex-row w-full bg-[#333] dark:bg-slate-700 text-[#ccc]">
        <div className="w-full max-w-screen-2xl mx-auto flex flex-row items-center justify-between">
          <div className="bg-orange-500 h-auto p-4">
            {/* <LogoIcon className="h-[0px]" /> */}
            <Image src={logoSc} alt="SC" className="min-w-[50px]"></Image>
            {/* <FaSoundcloud className="text-6xl"></FaSoundcloud> */}
          </div>
          <ul className="flex flex-row h-full items-center">
            {Navitems.map(({ name, href }) => {
              return (
                <ScButtonOne
                  border
                  name={name}
                  href={href}
                  setClicked={() => setClicked("name")}
                  clicked={clicked}></ScButtonOne>
              );
            })}
          </ul>
          <SearchBarSC></SearchBarSC>
          <InteractivesSC
            clicked={clicked}
            setClicked={setClicked}></InteractivesSC>
        </div>
      </div>
    </>
  );
};
