import { PinIcon } from "@/media";

import React from "react";
import ProfilePic from "../image";

type Props = {
  className?: string;
  pinned?: boolean;
  date: string;
  children: any;
};

function Tweet({ className, pinned, date, children }: Props) {
  return (
    <div className={className}>
      <article className="grid grid-cols-[auto_1fr] gap-2 p-4 hover:bg-gray-100 dark:hover:bg-gray-600">
        {pinned && (
          <div className="grid justify-end items-center">
            <PinIcon className="w-2.5 h-2.5 text-gray-500" />
          </div>
        )}
        {pinned && <p className="text-xs">Pinned Tweet</p>}
        <ProfilePic small />
        <div>
          <div className="flex items-center gap-2">
            <h5 className="text-sm font-semibold">Benja 😎</h5>
            <span>•</span>
            <time className="text-xs text-gray-700 dark:text-white">
              {date}
            </time>
          </div>
          {children}
        </div>
      </article>
    </div>
  );
}

export default Tweet;
