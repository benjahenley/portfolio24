"use client";

import { FC, useEffect, useState } from "react";
import { Navbar as FlowNavbar } from "flowbite-react";
import { NavBarItem } from "./NavbarItem";
import { SideBar } from "./sidebar/SideBar";
import { LanguageButton } from "./LanguageButton";
import { Locales, Navbar } from "@/interfaces";
import { DarkModeToggle } from "../DarkModeToggle";
import logo from "@/media/logo.png";
import Image from "next/image";

type Props = {
  className?: string;
  locale: Locales;
};

export const NavBarComp: FC<Props> = ({ className, locale }) => {
  const [isScrolled, setIsScrolled] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 20) setIsScrolled(true);
  //     else setIsScrolled(false);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <>
      <FlowNavbar
        fluid
        rounded
        className={`fixed top-1 left-0 z-[99] right-0 w-11/12  m-auto border border-slate-300 rounded-full mt-10 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "2xl:w-full top-0 mt-0  mx-auto w-full sm:w-full md:w-full rounded-none rounded-b-xl"
            : ""
        }`}>
        <FlowNavbar.Brand href="/">
          <Image
            src={logo}
            alt="logo"
            width="50"
            height="40"
            className=" top-7 right-10"
          />
        </FlowNavbar.Brand>

        <div className="flex order-2">
          <LanguageButton locale={locale} />
          <DarkModeToggle></DarkModeToggle>
        </div>

        <button
          onClick={() => {
            setShowSidebar(!showSidebar);
          }}
          data-collapse-toggle="navbar-hamburger"
          type="button"
          className="inline-flex order-first items-center justify-center xl:hidden p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-hamburger"
          aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </FlowNavbar>

      {showSidebar && (
        <SideBar
          locale={locale}
          hide={() => setShowSidebar(false)}
          className={
            showSidebar ? "animate-fadeInLeft" : "animate-fadeOutRight"
          }
        />
      )}
    </>
  );
};
