"use client";

import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { DarkModeContext } from "@/context/DarkModeContext";
import { useContext } from "react";
import { IoArrowDown } from "react-icons/io5";
import Projects from "@/lib/project";

export default function Home() {
  const { theme } = useContext(DarkModeContext);
  return (
    <div
      className={
        theme === "light"
          ? "bg-zinc-800 text-slate-100 container mx-auto w-full px-3 py-5 md:container md:px-10 md:py-5"
          : "bg-zinc-100 text-slate-800 container mx-auto w-full px-3 py-5 md:container md:px-10 md:py-5"
      }>
      <div className="md:flex items-center md:h-[25rem] h-[15rem]">
        <div className="md:w-1/2 md:mt-32 md:mb-40 mt-5">
          <div className="relative md:flex md:flex-col">
            <span className="text-2xl md:text-4xl font-medium">
              Hello, I&apos;m
              <br />
            </span>
            <span className="text-2xl md:text-4xl font-medium">
              Rizky Dipahiyat Alghipari.
            </span>
            <span className="absolute -bottom-[10rem] -left-1 md:-bottom-36 md:-left-2">
              <IoArrowDown size={28} width={38} />
            </span>
          </div>
        </div>
        <div className="md:2/3 md:mt-32 md:mb-40 mt-5">
          <div className="md:px-5">
            <span className="md:text-2xl text-md font-light text-justify">
              A final year informatics engineering student trying to specialize
              in frontend web developer & React.
            </span>
          </div>
        </div>
      </div>
      <ProjectCard data={Projects} />
    </div>
  );
}
