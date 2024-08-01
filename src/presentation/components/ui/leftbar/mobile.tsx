import {
  FaInstagram,
  FaLinkedin,
  FaSoundcloud,
  FaGithub,
} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { DarkModeToggle } from "@/presentation/components/ui/darkmode-btn/page";
import Link from "next/link";
import TwitterSession from "../twitter-session";
import { LanguageButton } from "../language-button/page";
import { Locales } from "@/infraestructure/interfaces";

import { FaGripLinesVertical } from "react-icons/fa";

const OPTIONS = [
  {
    logo: <CgProfile />,
    text: "PROFILE",
    href: "/",
  },
  {
    logo: <FaLinkedin />,
    text: "LINKED-IN",
    href: "https://www.linkedin.com/in/benjamin-h-579b88146/",
  },
  {
    logo: <FaGithub />,
    text: "GITHUB",
    href: "https://github.com/benjahenley",
  },
  {
    logo: <FaInstagram />,
    text: "INSTAGRAM",
    href: "https://www.instagram.com/benjahenley/",
  },
  {
    logo: <FaSoundcloud />,
    text: "MUSIC",
    href: "/soundcloud",
  },
];

type Props = {
  locale: Locales;
  className: string;
  handleClose: () => void;
};

export function LeftbarMobile({ locale, className, handleClose }: Props) {
  return (
    <div className={className}>
      <div
        className="fixed p-4 md:hidden z-10 top-0 bg-gray-100 dark:bg-slate-700 left-0 right-20 bottom-20 max-w-[256px]"
        style={{ width: "inherit" }}>
        <div className="h-full flex flex-row">
          <div className="flex flex-col justify-between h-full w-full">
            <div
              className="border-b xl:border-none lg:px-4 border-gray-300 dark:border-slate-600 lg:flex-col xl:flex-row flex items-center gap-2 justify-between lg:py-4 lg:pb-8 xl:py-2  "
              style={{ width: "inherit" }}>
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                className="dark:text-white text-5xl  xl:text-7xl cursor-pointer">
                <a href="/">BH</a>
              </text>
              <div className="">
                <DarkModeToggle />
              </div>
            </div>

            <div className="py-3 flex flex-col  w-full h-full mb-4 overflow-auto ">
              {OPTIONS.map(({ logo, text, href }, key) => {
                return (
                  <Link href={href} key={key}>
                    <div
                      key={text}
                      className="py-4 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer flex flex-row justify-start lg:justify-center xl:justify-start items-center gap-4 px-4">
                      <div className="text-xl lg:text-4xl">{logo}</div>
                      <p className="lg:hidden xl:block">{text}</p>
                    </div>
                  </Link>
                );
              })}

              <LanguageButton locale={locale}></LanguageButton>
            </div>
            <TwitterSession></TwitterSession>
          </div>
          <div
            className="flex h-full flex-col justify-center w-[5%] cursor-pointer"
            onClick={handleClose}>
            <FaGripLinesVertical className="text-2xl dark:text-white" />
          </div>
        </div>
      </div>
      {/* <div
        className="fixed bottom-1 max-w-[256px]"
        style={{ width: "inherit" }}></div>
     */}
    </div>
  );
}
