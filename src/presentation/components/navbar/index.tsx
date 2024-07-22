"use client";
import { MenuIcon } from "@/media/index";
import logo from "@/app/media/logo.png";
import Image from "next/image";
import { useState } from "react";
import { Options } from "../options";
import { DarkModeToggle } from "@/presentation/components/ui/DarkModeToggle";

export function Navbar() {
  // const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#E98074] flex items-center flex-wrap">
      <div className="flex justify-between w-full p-5">
        <Image
          src={logo}
          alt="logo"
          width="50"
          height="40"
          className="absolute top-7 right-10"
        />
        <DarkModeToggle></DarkModeToggle>

        {/* <div className="block lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center px-3 py-2 rounded ">
            <MenuIcon />
          </button>
          </div> */}
        {/* <Options /> */}
        {/* <div className={`absolute w-[50%] lg:flex lg:items-center lg:w-auto  `}>
          <div className="text-sm lg:flex-grow"></div>
        </div> */}
      </div>
    </div>
  );
}
