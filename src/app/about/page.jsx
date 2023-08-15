"use client";

import { DarkModeContext } from "@/context/DarkModeContext";
import React, { useContext } from "react";
import Profile from "@/assets/photo.png";
import Image from "next/image";
import SkillCard from "@/components/SkillCard/SkillCard";
import SkillSoftwareCard from "@/components/SkillSoftwareCard/SkillSoftwareCard";
import CollabCard from "@/components/CollabCard/CollabCard";

const About = () => {
  const { theme } = useContext(DarkModeContext);
  return (
    <div
      className={
        theme === "light"
          ? "bg-zinc-800 text-slate-100 container mx-auto w-full px-3 py-5 md:container md:px-10 md:py-5"
          : "bg-zinc-100 text-slate-800 container mx-auto w-full px-3 py-5 md:container md:px-10 md:py-5"
      }>
      <div className="flex flex-col-reverse md:flex-row md:items-center">
        <div className="md:w-1/2 md:mt-20 md:mb-40">
          <div className="relative flex flex-col">
            <span className="md:text-4xl text-lg font-medium">
              Hi, I&apos;m Rizky
            </span>
            <span className="md:text-4xl text-lg font-medium">
              Dipahiyat Alghipari, Frontend
            </span>
            <span className="md:text-4xl text-lg font-medium">
              Web Developer & ReactJS
            </span>
            <p className="font-extralight text-justify mt-10">
              My main focus as a front end web developer revolves around
              creating interactive and visually appealing user interfaces using
              ReactJS.
              <br />
              <br />
              Currently, I am a final year computer science student at Esa
              Unggul University, Jakarta. I have internship experience as a
              front end web developer for 8 months. I used to look for
              opportunities to further enhance my skills through internships.
            </p>
            <SkillSoftwareCard />
            <SkillCard />
          </div>
        </div>
        <div className="md:w-2/3 md:mt-10 md:px-20 mb-40">
          <div className="relative md:px-5 text-center">
            <Image
              src={Profile}
              alt="Profile"
              width={0}
              height={0}
              sizes="100vh"
              className="absolute md:top-20 md:right-[3rem] md:w-[400px] md:h-[400px]"
            />
            <svg
              className="w-[300px] h-[300px] md:w-[550px] md:h-[550px] "
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill={theme === "light" ? "#dcdde1" : "#273c75"}
                d="M48.3,-57.9C59.9,-47.8,64.9,-30,68.8,-11.6C72.6,6.8,75.4,25.9,68.7,41.6C62,57.3,45.9,69.5,29.6,70.8C13.4,72.1,-2.9,62.5,-19.5,55.5C-36,48.6,-52.8,44.4,-60.3,33.7C-67.9,23,-66.3,5.8,-60.1,-7.4C-54,-20.6,-43.3,-29.8,-32.6,-40C-21.8,-50.2,-10.9,-61.5,3.7,-66C18.3,-70.4,36.6,-67.9,48.3,-57.9Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>
      </div>
      <hr className="md:mb-10 mb-5" />
      <CollabCard />
    </div>
  );
};

export default About;
