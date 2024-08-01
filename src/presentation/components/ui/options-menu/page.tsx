import { Locales } from "@/infraestructure/interfaces";
import { WifiIcon } from "../../../../../public/svgs";
import { useState } from "react";
import { contents } from "@/data/contents/content";

type Props = {
  locale: Locales;
  setSection: (section: string) => void;
  section: string;
};

export function OptionsMenu({ locale, section, setSection }: Props) {
  const options = contents[locale].ui.optionsMenu.options;

  return (
    <ul className="sticky top-0 left-0 border-t border-b border-gray-300 dark:border-gray-600 font-bold flex justify-between items-center h-12 mt-2 text-center">
      {options.map(({ option, id }) => {
        return (
          <li
            onClick={() => setSection(id)}
            key={option}
            className={`w-full h-full flex items-center justify-center hover:bg-gray-100 cursor-pointer dark:hover:bg-slate-700 ${
              section === id && "border-b-2 border-[#e8594f]"
            }`}>
            {option}
          </li>
        );
      })}
    </ul>
  );
}
