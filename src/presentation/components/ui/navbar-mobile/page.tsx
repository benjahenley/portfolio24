"use client";

import { FC, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { FiTrendingUp } from "react-icons/fi";
import { LeftbarMobile } from "../leftbar/mobile";
import { Locales } from "@/infraestructure/interfaces";

type Props = {
  className?: string;
  // setMenu: () => void;
  locale: Locales;
};

export const NavbarMobile: FC<Props> = ({ className, locale }) => {
  const [menu, setMenu] = useState(false);
  return (
    <div className={className}>
      <LeftbarMobile
        handleClose={() => setMenu(false)}
        locale={locale}
        className={`${!menu && "hidden"}`}></LeftbarMobile>
      <div className="h-20 md:hidden"></div>
      <div className="fixed md:hidden bottom-0 w-full h-20 bg-custom-gradient">
        <div className="w-full h-full grid grid-cols-3 items-center text-white px-2">
          <div
            className="flex items-center justify-left text-5xl"
            onClick={() => setMenu(!menu)}>
            <HiOutlineMenu />
          </div>

          <div className="flex items-center justify-center relative">
            :
            <text
              className="relative z-10 text-6xl font-bold"
              style={{
                fontFamily: "Helvetica, sans-serif",
                lineHeight: "normal",
              }}>
              BH
            </text>
            :
          </div>

          <div className="text-5xl flex items-center justify-end mr-2">
            <FiTrendingUp />
          </div>
        </div>
      </div>
    </div>
  );
};
