"use client";
import { Locales } from "@/infraestructure/interfaces/locales";
import { FC, useEffect, useRef, useState } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useRouter } from "next/navigation";
import { IoLanguage } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { contents } from "@/data/contents/content";
import { useAtom } from "jotai";
import { langOptions } from "@/atoms/lang";

type Props = {
  sidebar?: boolean;
  locale: Locales;
};

export const LanguageButton: FC<Props> = ({ sidebar, locale }) => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const LANGUAGES = [
    { code: "en", name: contents[locale].ui.leftbar.languages.en, flag: "🇬🇧" },
    { code: "es", name: contents[locale].ui.leftbar.languages.es, flag: "🇪🇸" },
  ];

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
      className={`flex flex-col xl:flex items-center space-x-1 md:space-x-0 relative w-full h-full`}>
      <button
        onClick={() => setDropdown(!dropdown)}
        className="group w-full dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 py-3 md:py-5  cursor-pointer flex flex-row justify-starts md:justify-center xl:justify-between items-center gap-5 px-4">
        <div className="flex flex-row items-center gap-4">
          <div className="text-xl md:text-2xl lg:text-4xl transition-transform transform group-hover:scale-110">
            <IoLanguage />
          </div>
          <p className="uppercase text-md md:hidden xl:block xl:text-lg transition-transform transform ">
            {contents[locale].ui.leftbar.items[5]}
          </p>
        </div>
        <MdKeyboardArrowDown className="text-2xl block md:hidden xl:block" />
      </button>
      <div className="h-full overflow-x-hidden w-full ">
        {dropdown && (
          <ul
            className="w-full "
            role="none"
            onClick={() => setDropdown(false)}>
            {LANGUAGES.map(({ code, name, flag }) => (
              <li className="w-full" key={code}>
                <button
                  className="w-full"
                  onClick={() => changeLanguage(code as Locales)}>
                  <div className="px-3 lg:px-5 py-1 w-full dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer flex flex-row justify-start md:justify-center xl:justify-start items-center gap-4 ">
                    <div className="text-lg lg:text-xl xl:text-2xl">{flag}</div>
                    <p className="md:hidden xl:block">{name}</p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
