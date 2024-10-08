"use client";

import NavbarMobile from "@/presentation/components/ui/navbar-mobile/page";
import ProfilePic from "../../presentation/components/ui/image/page";
import { CakeIcon, CalendarIcon, LinksIcon } from "../../../public/svgs";
import { FollowButtonHome } from "@/presentation/components/ui/follow-button/page";
import { OptionsMenu } from "@/presentation/components/ui/options-menu/page";
import { feedOptions } from "@/atoms/feed";
import { MdVerified } from "react-icons/md";
import { RightBar } from "@/presentation/components/ui/rightbar/page";
import { Projects } from "@/presentation/components/pages/home/projects";
import { Skillset } from "@/presentation/components/pages/home/skillset";
import { contents } from "@/data/contents/content";
import { Locales } from "@/infraestructure/interfaces";
import { Leftbar } from "@/presentation/components/ui/leftbar";
import { useAtom } from "jotai";
import { Footer } from "@/presentation/components/ui/footer";
import { About } from "@/presentation/components/pages/home/about";
import { Desk } from "@/presentation/components/ui/desk";
import { Feed } from "@/presentation/components/pages/home/feed";

export default function Home({
  params: { locale },
}: Readonly<{
  params: { locale: Locales };
}>) {
  const [section, setSection] = useAtom(feedOptions);
  const { home } = contents[locale].pages;

  return (
    <div className="flex flex-col items-center min-h-screen bg-white dark:bg-[#1f2937] overflow-hidden">
      <div className="flex w-full h-full max-w-screen-xl">
        <aside className="relative h-[100h] hidden md:block md:w-[10%] lg:w-[10%] xl:w-1/5 p-0 m-0 bg-white dark:bg-[#1f2937]">
          <Leftbar locale={locale} />
        </aside>
        <main className="m-0 md:w-[90%] lg:m-0 w-full lg:w-3/5 flex-1 border-l border-r border-gray-300 dark:border-gray-600">
          <header className="border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1f2937] dark:text-white w-full relative mx-0 md:mx-auto lg:mx-0">
            <div className="relative mx-auto ">
              <div className="flex justify-center items-center h-[250px] sm:h-[250px] md:h-[200px] lg:h-[300px] bg-[#D8C3A5]">
                <Desk className="h-[250px] sm:h-[250px] md:h-[200px] lg:h-[300px]" />
              </div>
              <div className="px-4">
                <div className="flex flex-row overflow-visible justify-between items-end space-y-2 pt-5 h-[40px]">
                  <ProfilePic className="w-20 h-20 border-4 border-white dark:border-slate-800 rounded-full overflow-hidden m-0 p-0" />
                  <FollowButtonHome
                    locale={locale}
                    className="min-w-[120px] bg-[#E85A4F] text-white rounded-full flex items-center justify-center hover:border-3 hover:border-black"
                  />
                </div>
                <div className="flex flex-col items-start mb-2">
                  <div className="flex flex-row gap-1 items-center">
                    <h1 className="text-2xl font-bold">Benja Henley</h1>
                    <MdVerified />
                  </div>
                  <p className="font-medium text-gray-500 dark:text-slate-500 cursor-pointer">
                    <a
                      href="https://www.instagram.com/benjahenley/"
                      target="_blank">
                      @benja_dev
                    </a>
                  </p>
                </div>
                <h4 className="text-lg font-semibold">{home.bio.title}</h4>
                <p className="mb-4">{home.bio.subtitle}</p>
              </div>
              <div className="flex flex-wrap gap-4 pl-4 ">
                <div className="flex items-center gap-1">
                  <LinksIcon className="w-5 h-5" />
                  <a>
                    <p className="text-sm">Links</p>
                  </a>
                </div>
                <div className="flex items-center gap-1">
                  <CakeIcon className="w-5 h-5" />
                  <p className="text-sm">27/06/2000</p>
                </div>
                <div className="flex items-center gap-1">
                  <CalendarIcon className="w-5 h-5" />
                  <p className="text-sm">
                    {locale === "es" ? "Inicio" : "Joined"} 05/2021
                  </p>
                </div>
              </div>
            </div>
            <OptionsMenu
              locale={locale}
              section={section}
              setSection={(newSection: string) =>
                setSection(newSection)
              }></OptionsMenu>
          </header>
          <section className="bg-white dark:bg-[#1f2937] dark:text-white w-full mx-auto">
            <div className="grid gap-4">
              {section === "feed" && (
                <Feed
                  className="bg-white dark:bg-[#1f2937] dark:text-white"
                  locale={locale}
                />
              )}
              {section === "about" && (
                <About
                  className="p-4 bg-white dark:bg-[#1f2937] dark:text-white"
                  locale={locale}
                />
              )}
              {section === "projects" && (
                <Projects
                  className="bg-white dark:bg-[#1f2937] dark:text-white"
                  locale={locale}
                />
              )}
              {section === "skills" && (
                <Skillset
                  locale={locale}
                  className="p-4 bg-white dark:bg-[#1f2937] dark:text-white"
                />
              )}
            </div>
          </section>
          <Footer></Footer>
          <NavbarMobile locale={locale}></NavbarMobile>
        </main>
        <aside className="relative hidden p-2 pl-5 lg:block lg:w-[30%] xl:w-1/5 bg-white dark:bg-[#1f2937]">
          <RightBar locale={locale}></RightBar>
        </aside>
      </div>
    </div>
  );
}
