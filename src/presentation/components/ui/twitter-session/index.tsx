import { RxDotsHorizontal } from "react-icons/rx";
import ProfilePic from "../../../../presentation/components/ui/image/page";

import React from "react";

function TwitterSession() {
  return (
    <>
      <div className="max-w-[256px]" style={{ width: "inherit" }}>
        <div className="border-t border-gray-300 dark:border-slate-600">
          <div className="flex flex-row items-center justify-between md:justify-center xl:justify-between dark:text-white md:py-4 xl:py-0 xl:px-4">
            <div className="flex flex-row items-center pl-2 md:pl-0 xl:pl-0">
              <ProfilePic small={true} className="cursor-pointer"></ProfilePic>
              <div className="p-4 md:hidden xl:block">
                <p className="text-sm font-bold cursor-pointer">Benja Henley</p>
                <p className="text-sm  dark:text-gray-500 cursor-pointer">
                  @benja_dev
                </p>
              </div>
            </div>
            <div className="md:hidden xl:block p-1 rounded-full dark:hover:bg-slate-700 hover:bg-slate-200 cursor-pointer">
              <RxDotsHorizontal></RxDotsHorizontal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TwitterSession;
