"use client";

import { DarkModeContext } from "@/context/DarkModeContext";
import React, { useContext } from "react";
import { IoMailOutline } from "react-icons/io5";

const Contact = () => {
  const { theme } = useContext(DarkModeContext);
  return (
    <div
      className={
        theme === "light"
          ? "bg-zinc-800 text-slate-100 container mx-auto w-full px-3 py-5 md:container md:max-w-full md:px-20 md:py-5 h-[500px] md:h-screen"
          : "bg-zinc-100 text-slate-800 container mx-auto w-full px-3 py-5 md:container md:max-w-full md:px-20 md:py-5 h-[500px] md:h-screen"
      }>
      <div className="flex flex-col gap-y-5 mt-20 md:flex-row md:justify-between md:px-10 md:mt-32 md:mb-10">
        <div
          className={`${
            theme === "light" ? "bg-zinc-600" : "bg-zinc-200  "
          } md:w-1/2 flex flex-col px-4 py-5 text-2xl md:text-4xl gap-y-2 font-semibold rounded-lg md:px-7 md:py-5`}>
          <span>Let&apos;s chat.</span>
          <span>Tell me about your</span>
          <span>project.</span>
          <span className="text-sm font-normal mt-5">
            Let&apos;s create something together👋
          </span>
        </div>
        <div className="md:w-1/2 items-center md:px-10">
          <div className="md:mt-20">
            <a href="mailto:rizkydipahiyat76@gmail.com">
              <div
                className={`${
                  theme === "light" ? "bg-zinc-600" : "bg-zinc-200"
                } flex items-center md:px-2 md:py-2 rounded-md gap-x-2 md:w-[250px]`}>
                <span className="px-2">
                  <IoMailOutline size={50} />
                </span>
                <div className="flex flex-col rounded-md">
                  <span className="font-semibold">Mail me at</span>
                  <span className="text-sm">Rizky Dipahiyat</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
