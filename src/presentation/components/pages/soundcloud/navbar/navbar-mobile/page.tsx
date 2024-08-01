"use client";

import { FC, useState } from "react";

type Props = {
  className?: string;
};

export const NavbarMobileSC: FC<Props> = ({ className }) => {
  return (
    <>
      <div className="fixed bottom-0 md:hidden w-full h-16 ">
        <div className="w-full bg-red-400 h-full flex items-center flex-row">
          <button>
            <span></span>
          </button>
        </div>
      </div>
    </>
  );
};
