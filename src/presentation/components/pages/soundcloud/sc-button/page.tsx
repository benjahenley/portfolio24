import Link from "next/link";
import { useState } from "react";

type Props = {
  href?: string;
  name: string;
  setClicked: (name: string) => void;
  clicked: string;
  children?: any;
  border?: boolean;
};

export const ScButtonOne = ({
  href,
  name,
  setClicked,
  clicked,
  children,
  border,
}: Props) => {
  return (
    <li
      key={name}
      className={`${clicked === name ? "bg-[#111] dark:bg-slate-600" : " "} ${
        border && "border-r border-black"
      } text-xl font-medium cursor-pointer h-full w-full flex place-items-center`}
      onClick={() => setClicked(name)}>
      <Link
        href={href ? href : ""}
        className="px-[1rem] lg:px-[1rem] xl:px-[1.5rem] 2xl:px-[2rem]  h-full w-full flex items-center">
        {children ? children : name}
      </Link>
    </li>
  );
};
