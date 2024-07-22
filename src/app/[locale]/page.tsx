"use client";

import { Desk } from "@/presentation/components/desk";
import { About } from "@/presentation/components/about";
import { FollowButton } from "@/presentation/components/FollowButton";
import { Projects } from "@/presentation/components/projects";
import { Skillset } from "@/presentation/components/skillset";
import { CakeIcon, CalendarIcon, LinksIcon } from "@/media";
import { useState } from "react";
import { Feed } from "@/presentation/components/feed";
import ProfilePic from "../../presentation/components/image";

export default function Home() {
  const [section, setSection] = useState("Feed");

  function changeSection(e: any) {
    console.log(e.target.innerHTML);
    setSection(e.target.innerHTML);
  }

  return (
    <div className=" flex flex-col items-center min-h-screen bg-white dark:bg-[#1f2937] max-w-screen overflow-hidden">
      <header className="bg-white dark:bg-[#1f2937] dark:text-white w-full max-w-screen-lg relative mx-auto">
        <div className="relative mx-auto max-w-2xl">
          <div className="flex justify-center items-center h-48 bg-[#D8C3A5]">
            <Desk className="w-36 h-36" />
          </div>
          <div className="px-4">
            <div className="flex flex-row overflow-visible justify-between items-end space-y-2 pt-50 h-[40px]">
              <ProfilePic className="w-20 h-20 border-4 border-black rounded-full overflow-hidden m-0 p-0" />
              <FollowButton className="min-w-[120px] bg-[#E85A4F] text-white rounded-full flex items-center justify-center hover:border-3 hover:border-black" />
            </div>
            <div className="flex flex-col items-start mb-2">
              <h1 className="text-2xl font-bold">Benja Henley</h1>
              <a className="font-light text-gray-500">@benja_dev</a>
            </div>
            <h4 className="text-lg font-medium">Junior web developer 🤟🏻🔥</h4>
            <p className="mb-2 text-sm">
              I aspire to create beautiful things, and my journey has just
              begun.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pl-4 ">
            <div className="flex items-center gap-1">
              <LinksIcon className="w-5 h-5" />
              <a>
                <p className="text-sm">links</p>
              </a>
            </div>
            <div className="flex items-center gap-1">
              <CakeIcon className="w-5 h-5" />
              <p className="text-sm">27/06/2000</p>
            </div>
            <div className="flex items-center gap-1">
              <CalendarIcon className="w-5 h-5" />
              <p className="text-sm">Joined 05/2021</p>
            </div>
          </div>
        </div>
      </header>
      <section className="bg-white dark:bg-[#1f2937] dark:text-white w-full max-w-2xl mx-auto mt-6">
        <ul
          className="font-bold flex justify-between items-center h-12 mt-2 text-center cursor-pointer"
          onClick={changeSection}>
          <li
            className={` w-full h-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 ${
              section === "Feed" ? "border-b-2 border-[#E85A4F]" : ""
            }`}>
            Feed
          </li>
          <li
            className={`w-full h-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600  ${
              section === "About" ? "border-b-2 border-[#E85A4F]" : ""
            }`}>
            About
          </li>
          <li
            className={`w-full h-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600  ${
              section === "Projects" ? "border-b-2 border-[#E85A4F]" : ""
            }`}>
            Projects
          </li>
          <li
            className={`w-full h-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600  ${
              section === "Skillset" ? "border-b-2 border-[#E85A4F]" : ""
            }`}>
            Skillset
          </li>
        </ul>
        <div className="grid gap-4 mb-5">
          {section === "Feed" && (
            <Feed className="bg-white dark:bg-[#1f2937] dark:text-white" />
          )}
          {section === "About" && (
            <About className="p-4 bg-white dark:bg-[#1f2937] dark:text-white" />
          )}
          {section === "Projects" && (
            <Projects className="bg-white dark:bg-[#1f2937] dark:text-white" />
          )}
          {section === "Skillset" && (
            <Skillset className="p-4 bg-white dark:bg-[#1f2937] dark:text-white" />
          )}
        </div>
      </section>
    </div>
  );
}
