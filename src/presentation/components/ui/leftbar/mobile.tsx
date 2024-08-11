"use client";

import { FaGripLinesVertical } from "react-icons/fa";
import { DarkModeToggle } from "@/presentation/components/ui/darkmode-btn/page";
import Link from "next/link";
import TwitterSession from "../twitter-session";
import { LanguageButton } from "../language-button/page";
import { Locales } from "@/infraestructure/interfaces";
import getOptions from "@/infraestructure/data/menu/page";

type Props = {
  locale: Locales;
  className: string;
  handleClose: () => void;
};

export function LeftbarMobile({ locale, className, handleClose }: Props) {
  const OPTIONS = getOptions(locale);

  return (
    <div className={className}>
      <div
        className="fixed p-4 pr-0 md:hidden z-10 top-0 left-0 right-20 bottom-20 max-w-[256px] bg-gray-100 dark:bg-slate-700"
        style={{ width: "inherit" }}>
        <div className="h-full flex flex-row">
          <div className="flex flex-col justify-between h-full w-full">
            <div
              className="border-b xl:border-none lg:px-4 border-gray-300 dark:border-slate-600 lg:flex-col xl:flex-row flex items-center gap-2 justify-between lg:py-4 lg:pb-8 xl:py-2"
              style={{ width: "inherit" }}>
              <span className="dark:text-white text-5xl xl:text-7xl cursor-pointer">
                <a href="/">BH</a>
              </span>
              <DarkModeToggle />
            </div>
            <div className="py-3 flex flex-col w-full h-full mb-4 overflow-auto overflow-x-hidden">
              {OPTIONS.map(({ logo, text, href }, key) => (
                <Link href={href} key={key}>
                  <div className="py-4 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer flex flex-row justify-start lg:justify-center xl:justify-start items-center gap-4 px-4">
                    <div className="text-xl lg:text-4xl">{logo}</div>
                    <p className="lg:hidden xl:block">{text}</p>
                  </div>
                </Link>
              ))}
              <LanguageButton locale={locale} />
            </div>
            <TwitterSession />
          </div>
          <div
            className="flex h-full flex-col w-[10%] overflow-hidden justify-center cursor-pointer"
            onClick={handleClose}>
            <FaGripLinesVertical className="text-2xl dark:text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
