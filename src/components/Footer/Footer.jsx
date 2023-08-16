"use client";

import { DarkModeContext } from "@/context/DarkModeContext";
import Link from "next/link";
import React, { useContext } from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  const { theme } = useContext(DarkModeContext);
  return (
    <div
      className={
        theme === "light"
          ? "bg-zinc-800 text-zinc-100 container w-full px-3 md:py-5 md:max-w-full mx-auto h-[100px]"
          : "bg-zinc-100 text-slate-800 container w-full px-3 md:py-5 md:max-w-full mx-auto h-[100px]"
      }>
      <div className="flex flex-col md:flex-row md:px-7 gap-y-4 md:justify-between">
        <div className="md:font-bold md:text-lg">
          Rizky Dipahiyat Alghipari - 2023
        </div>
        <div className="md:font-normal md:text-md">
          <Link href={"https://www.linkedin.com/in/rrizkyda/"} target="blank">
            <div className="flex items-center gap-x-2">
              <IoLogoLinkedin />
              <span>LinkedIn</span>
            </div>
          </Link>
          <Link href={"https://github.com/rizkydipahiyat"} target="blank">
            <div className="flex items-center gap-x-2">
              <FaGithubSquare />
              <span>Github</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
