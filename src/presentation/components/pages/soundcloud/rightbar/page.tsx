import { FC, useState } from "react";
import { FollowCountSC } from "../ui/follow-count/page";

type Props = {
  className?: string;
  // locale: Locales;
};

const Navitems = ["All", "Popular Tracks", "Tracks", "Playlists"];

export const RightBarSC: FC<Props> = ({ className }) => {
  return (
    <>
      <div className="flex-1 w-full pt-4 px-2 md:px-5 lg:px-4 xl:px-0">
        {/* <FollowButton className="min-w-[120px] bg-[#E85A4F] text-white rounded-full flex items-center justify-center hover:border-3 hover:border-black" /> */}
        <FollowCountSC></FollowCountSC>

        <div className="flex flex-col items-start mb-2">
          {/* <h1 className="text-2xl font-bold">Benja Henley</h1> */}
        </div>
        <p className="mb-4 font-light dark:text-white">
          Benjamin Henley Saubidet, born in Buenos Aires, Argentina in the year
          2000 is a techno dj & producer. His passion for electronic music
          blossomed after finishing school and entering the real life, where he
          got a job and started investing in what would soon become his future.
          <br />
          <br />
          His career as a producer began with his first release, thanks to local
          dj and now drumcode artist Nicolas Taboada, who selected him for Dj
          mag's first techno compilation.
          <br />
          <br />
          His sound is characterized by dancy, yet sometimes melancholic
          melodies. He's a big fan of sound design and all of his tracks possess
          an array of original stabs, growls and fx that make his sound unique.
          <br />
          <br />
          He is currently signed on IAMT red, Invicta, Nova Collective, Redlof,
          Kaligo, Reload Black, Dj Mag LA, Infekted, Made in Brussels,
          Spacekraft & Future techno
        </p>
      </div>
    </>
  );
};
