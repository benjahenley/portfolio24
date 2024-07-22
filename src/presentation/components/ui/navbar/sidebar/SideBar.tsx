"use client";

import { Sidebar } from "flowbite-react";
import { SlClose } from "react-icons/sl";
import { FC, useState } from "react";
import { SideBarItem } from "./SideBarItem";
import { LanguageButton } from "../LanguageButton";
import { Navbar, Locales } from "@/interfaces";

type Props = {
  className: string;
  hide: () => void;
  locale: Locales;
};

export const SideBar: FC<Props> = ({ hide, className, locale }) => {
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    if (openItemIndex === index) {
      setOpenItemIndex(null);
    } else {
      setOpenItemIndex(index);
    }
  };
  return (
    <>
      <Sidebar
        aria-label="Sidebar with multi-level dropdown example"
        className={`${className} fixed z-[199] top-0 w-full max-w-md transition ease-in-out delay-400`}>
        <Sidebar.Items>
          <button
            onClick={() => {
              hide();
            }}
            type="button"
            data-drawer-hide="drawer-navigation"
            aria-controls="drawer-navigation"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
            <SlClose size={30}></SlClose>
          </button>

          <LanguageButton locale={locale} sidebar></LanguageButton>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
};
