"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { Locales, Navbar } from "@/interfaces";

type Props = {
  item: Navbar;
  locale: Locales;
};

export const NavBarItem: FC<Props> = ({ item, locale }) => {
  const [showSubItem, setShowSubItem] = useState(false);

  return (
    <li
      className="rounded-full p-3 grid place-items-center hover:text-blue-700 hover:bg-[#a1c8ea] relative"
      onMouseEnter={() => setShowSubItem(true)}
      onMouseLeave={() => setShowSubItem(false)}>
      { item.has_dropdown ? (
        <>
          <Link
            onClick={() => setShowSubItem(!showSubItem) }
            href={`/${ locale }/${ item.href }`}
            locale={ locale }
            id="dropdownNavbarLink"
            data-dropdown-toggle="dropdownNavbar"
            className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
              { item.label }
          </Link>
          {showSubItem && (
            <div className="flex md:order-2 absolute z-10 top-12">
              <div
                id="dropdownNavbar"
                className=" font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-80 dark:bg-gray-700 dark:divide-gray-600">
                <ul
                  className=" py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton">
                  { item.submenus.map((item, key) => {
                    return (
                      <li key={key} 
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-left">
                        <Link
                          onClick={() => setShowSubItem(!showSubItem) }
                          href={`/${ locale }/${ item.href }`}
                          className="w-full text-start"
                          >
                          { item.label }
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </>
      ) : (
        <Link
          onClick={() => setShowSubItem(!showSubItem) }
          href={`/${ locale }/${ item.href }`}
          className="block py-2 px-3 text-black rounded md:bg-transparent md:p-0 hover:text-blue-700 md:dark:text-blue-500"
          aria-current="page">
          { item.label }
        </Link>
      )}
    </li>
  );
};
