"use client";
import { Locales } from "@/interfaces/locales";
import { FC, useEffect, useRef, useState } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useRouter } from "next/navigation";

type Props = {
  sidebar?: boolean;
  locale: Locales;
};

export const LanguageButton: FC<Props> = ({ sidebar, locale }) => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const changeLanguage = (newLocale: Locales) => {
    const url = window.location.pathname.split("/").slice(2).join("/");
    if (newLocale !== locale) {
      router.push(`/${newLocale}/${url}`);
      setDropdown(false);
    } else return;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdown(false);
      }
    };
    if (dropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdown]);

  return (
    <div
      ref={dropdownRef}
      className={`${
        sidebar ? "flex" : "hidden"
      } xl:flex items-center space-x-1 md:space-x-0 relative w-[10rem]`}>
      <button
        type="button"
        onClick={() => {
          setDropdown(!dropdown);
        }}
        data-dropdown-toggle="language-dropdown-menu"
        className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        {locale === "es" ? (
          <>
            <span className="fi fi-es mr-2"></span>
            Spanish (ES)
          </>
        ) : (
          <>
            <span className="fi fi-us mr-2"></span>
            English (US)
          </>
        )}
      </button>
      {dropdown && (
        <div
          className="absolute z-50 my-4 top-8 right-0 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 w-[10rem]"
          id="language-dropdown-menu">
          <ul
            className="py-2 font-medium"
            role="none"
            onClick={() => setDropdown(false)}>
            <li>
              <a
                onClick={() => changeLanguage("en")}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem">
                <div className="inline-flex items-center">
                  <span className="fi fi-us mr-2"></span>
                  English (US)
                </div>
              </a>
            </li>

            <li>
              <a
                onClick={() => changeLanguage("es")}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem">
                <div className="inline-flex items-center">
                  <span className="fi fi-es mr-2"></span>
                  Spanish (ES)
                </div>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
