import { PinIcon } from "../../../../../public/svgs";
import React, { useState } from "react";
import ProfilePic from "../image/page";
import InteractionItem from "./interactionItem";
import INTERACTIONS from "../../../../infraestructure/data/interactions/page";

type Props = {
  className?: string;
  pinned?: boolean;
  date: string;
  children: any;
  likes: number;
  comments: number;
  reposts: number;
  saves: number;
};

function Tweet({
  className,
  pinned,
  date,
  children,
  likes,
  comments,
  reposts,
  saves,
}: Props) {
  const counts: any = { likes, comments, reposts, saves };

  return (
    <div className={className}>
      <article className="transition-all duration-200 border-b border-slate-300 dark:border-gray-600 grid grid-cols-[auto_1fr] gap-2 p-4 hover:bg-gray-100 dark:hover:bg-slate-700">
        {pinned && (
          <div className="grid justify-end items-center">
            <PinIcon className="w-2.5 h-2.5 text-gray-500" />
          </div>
        )}
        {pinned && <p className="text-xs">Pinned Tweet</p>}
        <ProfilePic small />
        <div>
          <div className="flex items-center gap-2">
            <h5 className="text-md font-semibold">Benja Henley</h5>
            <span>•</span>
            <time className="text-xs text-gray-700 dark:text-white">
              {date}
            </time>
          </div>
          <div className="overflow-hidden">{children}</div>
          <ul className="mt-3 flex justify-around w-full max-w-lg mx-auto">
            {INTERACTIONS.slice(0, 4).map(
              ({ icon, clicked, text, key, color, colorText }) => (
                <InteractionItem
                  key={key}
                  icon={icon}
                  clicked={clicked}
                  text={text}
                  keyName={key}
                  color={color}
                  colorText={colorText}
                  count={counts[key]}
                />
              )
            )}
            <div className="flex flex-row">
              {INTERACTIONS.slice(4).map(
                ({ icon, clicked, text, key, color, colorText }) => (
                  <InteractionItem
                    key={key}
                    icon={icon}
                    clicked={clicked}
                    text={text}
                    keyName={key}
                    color={color}
                    colorText={colorText}
                    count={counts[key]}
                  />
                )
              )}
            </div>
          </ul>
        </div>
      </article>
    </div>
  );
}

export default Tweet;
