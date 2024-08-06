import { FC, useState } from "react";
import { FollowCountSC } from "../ui/follow-count/page";
import { Locales } from "@/infraestructure/interfaces";
import { contents } from "@/data/contents/content";

type Props = {
  className?: string;
  locale: Locales;
};

export const RightBarSC: FC<Props> = ({ className, locale }) => {
  const { texts } = contents[locale].ui.soundcloud.rightbar;
  return (
    <div className={className}>
      <div className="px-4 lg:px-1">
        <FollowCountSC></FollowCountSC>
        <div className="flex flex-col items-start mb-2">
          {texts.map((text, key) => {
            return (
              <p className="mb-4 font-light dark:text-white" key={key}>
                {text}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};
