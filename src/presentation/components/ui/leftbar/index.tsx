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
import { contents } from "@/data/contents/content";

type Props = {
  locale: Locales;
};

export function Leftbar({ locale }: Props) {
  const { items } = contents[locale].ui.leftbar;
  const OPTIONS = [
    {
      logo: <CgProfile />,
      text: items[0],
      href: "/",
    },
    {
      logo: <FaLinkedin />,
      text: items[1],
      href: "https://www.linkedin.com/in/benjamin-h-579b88146/",
    },
    {
      logo: <FaGithub />,
      text: items[2],
      href: "https://github.com/benjahenley",
    },
    {
      logo: <FaInstagram />,
      text: items[3],
      href: "https://www.instagram.com/benjahenley/",
    },
    {
      logo: <FaSoundcloud />,
      text: items[4],
      href: "/soundcloud",
    },
  ];
  return (
    <>
      <div
        className="fixed max-w-[256px] h-full pt-4 overflow-y-auto hide-scrollbar"
        style={{ width: "inherit" }}>
        <div className="flex flex-col justify-between h-full">
          <div>
            <div
              className="border-b xl:border-none lg:px-2 border-gray-300 dark:border-slate-600 md:flex-col xl:flex-row flex items-center gap-2 xl:gap-14 justify-start md:py-4 md:pb-8 xl:py-2"
              style={{ width: "inherit" }}>
              <div className="dark:text-white md:text-5xl lg:text-6xl xl:text-7xl cursor-pointer flex items-center justify-center">
                <a href="/">BH</a>
              </div>
              <div className="">
                <DarkModeToggle />
              </div>
            </div>
            <div className="py-3 flex flex-col w-full h-full overflow-y-auto hide-scrollbar">
              {OPTIONS.map(({ logo, text, href }, key) => {
                return (
                  <Link href={href} key={key} className="group">
                    <div
                      key={text}
                      className="py-5 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer flex flex-row justify-start md:justify-center xl:justify-start items-center gap-4 px-4">
                      <div className="transition-transform transform group-hover:scale-105 text-2xl md:text-3xl lg:text-4xl">
                        {logo}
                      </div>
                      <p className="text-lg transition-transform uppercase transform group-hover:scale-110 md:hidden xl:block">
                        {text}
                      </p>
                    </div>
                  </Link>
                );
              })}
              <LanguageButton locale={locale}></LanguageButton>
            </div>
          </div>
          <TwitterSession></TwitterSession>
        </div>
      </div>
    </>
  );
}
