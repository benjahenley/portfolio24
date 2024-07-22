"use client";

import { FC } from "react";
import { Sidebar } from "flowbite-react";
import { FaChevronDown } from "react-icons/fa";
import { Navbar } from "@/interfaces";

type Props = {
  item: Navbar;
  handleToggle: () => void;
  isOpen: boolean;
  hide: () => void;
};

export const SideBarItem: FC<Props> = ({
  item,
  handleToggle,
  isOpen,
  hide,
}) => {
  return (
    <>
      {item.submenus.length > 0 ? (
        <li className="w-full">
          <button
            onClick={handleToggle}
            type="button"
            className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            aria-controls="dropdown-example"
            data-collapse-toggle="dropdown-example">
            <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
              {item.label}
            </span>
            <FaChevronDown
              className={`duration-300 ${
                isOpen ? "" : "-rotate-90 duration-150 "
              } `}
            />
          </button>

          <ul
            id="dropdown-example"
            className={`${!isOpen && "hidden duration-300"} py-2 space-y-2`}>
            {item.submenus.map((subitem, key) => {
              return (
                <li key={key} onClick={hide}>
                  <a
                    href={subitem.href}
                    className="hover:font-semibold hover:text-blue flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                    {subitem.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </li>
      ) : (
        <Sidebar.Item href={item.href}>{item.label}</Sidebar.Item>
      )}
    </>
  );
};
