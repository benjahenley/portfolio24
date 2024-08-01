"use client";

import Image from "next/image";

import { MiniNavSoundCloud } from "@/presentation/components/pages/soundcloud/mininavbar/page";
import { NavBarSC } from "@/presentation/components/pages/soundcloud/navbar/navbar-desktop/page";
import { FollowCountSC } from "@/presentation/components/pages/soundcloud/ui/follow-count/page";
import { MusicCard } from "@/presentation/components/pages/soundcloud/ui/musicCard/page";
import { NavbarMobileSC } from "@/presentation/components/pages/soundcloud/navbar/navbar-mobile/page";
import { RightBarSC } from "@/presentation/components/pages/soundcloud/rightbar/page";

const TRACKS = [
  {
    artwork: "/photos/tracks/make-you-forget.jpg",
    audioFile: "/music/make-you-forget.wav",
    title: "Make You Forget",
    date: "9 months ago",
    hashtag: "#Electronic",
  },
  {
    artwork: "/photos/tracks/high-stakes.jpg",
    audioFile: "/music/high-stakes.wav",
    title: "High Stakes",
    date: "1 month ago",
    hashtag: "#Techno",
  },
  {
    artwork: "/photos/tracks/king-status.jpg",
    audioFile: "/music/king-status.wav",
    title: "King Status",
    date: "12 months ago",
    hashtag: "#Techno",
  },
  {
    artwork: "/photos/tracks/anomaly.jpg",
    audioFile: "/music/anomaly.wav",
    title: "Anomaly",
    date: "1 year ago",
    hashtag: "#Techno",
  },
  {
    artwork: "/photos/tracks/alternative-ending.jpg",
    audioFile: "/music/alternative.jpg",
    title: "Alternative Ending",
    date: "1 year ago",
    hashtag: "#Techno",
  },
  {
    artwork: "/photos/tracks/injection.jpeg",
    audioFile: "/music/injection.wav",
    title: "Injection",
    date: "1 year ago",
    hashtag: "#Techno",
  },
];

export default function SoundCloud() {
  return (
    <header className="bg-white dark:bg-[#1f2937] dark:text-white w-full relative mx-auto h-full">
      <div className="relative mx-auto">
        <div className="flex justify-center items-center border-none">
          <div className="overflow-hidden h-auto border-none">
            <img
              src="/photos/ui/nova.jpg"
              alt="nova"
              className="h-auto min-h-[200px] object-cover"></img>
          </div>
          <div className="absolute left-5 sm:left-5 md:left-10 flex flex-row gap-7">
            <div className="rounded-full overflow-hidden">
              <Image
                width={200}
                height={600}
                src="/photos/ui/benjaSC.jpg"
                alt="benjaSC"
                className="w-full h-auto max-w-[120px] sm:max-w-[150px] md:max-w-[160px] lg:max-w-[140px] xl:max-w-[170px]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="bg-black text-white text-4xl uppercase w-fit py-2 px-2">
                Benja Henley
              </p>
              <p className="bg-black text-sm sm:text-xl  text-gray-400 px-2 w-fit">
                Buenos Aires, Argentina
              </p>
            </div>
          </div>
        </div>
        <MiniNavSoundCloud></MiniNavSoundCloud>
        <div className="lg:hidden">
          <RightBarSC></RightBarSC>
        </div>

        {/* TRACKS */}

        <div className=" w-full p-4 flex flex-col gap-5">
          {TRACKS.map((track) => {
            return <MusicCard {...track}></MusicCard>;
          })}
        </div>
      </div>
    </header>
  );
}
