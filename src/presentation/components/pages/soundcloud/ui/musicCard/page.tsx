"use client";

import Image from "next/image";
import { FC, useState } from "react";

import { FaPlay } from "react-icons/fa6";
import Waveform from "../waveform/page";
// import audioFile from "@/media/music/make.wav";

type Props = {
  className?: string;
  artwork: string;
  audioFile: string;
  title: string;
  date: string;
  hashtag: string;
};

export const MusicCard: FC<Props> = ({
  className,
  artwork,
  audioFile,
  title,
  date,
  hashtag,
}) => {
  const handleClick = () => {};
  return (
    <>
      <div className="w-full flex flex-row h-full">
        <div className="w-1/4 md:w-1/5 lg:w-1/4 xl:w-1/5">
          <img src={artwork} alt="benja"></img>
        </div>
        <div className="mt-1 px-2 sm:px-4 sm:py-2 w-3/4 md:w-4/5 lg:w-3/4 xl:w-4/5 flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row w-full h-full sm:h-fit justify-between sm:items-center">
            <div className="flex flex-row gap-2 items-center">
              <button
                className="bg-orange-500 p-3 rounded-full"
                onClick={handleClick}>
                <span className="text-md text-white">
                  <FaPlay className="pl-1"></FaPlay>
                </span>
              </button>
              <div className="flex flex-col">
                <p
                  className="text-gray-400 font-medium text-md"
                  style={{ lineHeight: 0.8 }}>
                  BENJA HENLEY
                </p>
                <p className="text-xl">{title}</p>
              </div>
            </div>
            <div className="px-2 sm:px-0 flex flex-row items-center justify-between sm:flex-col sm:items-end">
              <p className="text-gray-400 font-medium text-sm sm:text-lg">
                {date}
              </p>
              <p className="rounded-full text-gray-400 dark:text-white text-sm">
                #Electronic
              </p>
            </div>
          </div>
          <div className="hidden sm:block">
            <Waveform audioFile={audioFile} />
          </div>
        </div>
      </div>
    </>
  );
};
