"use client";

import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { DarkModeContext } from "@/context/DarkModeContext";
import { useContext } from "react";
import { IoArrowDown } from "react-icons/io5";
import Projects from "@/lib/project";
import Head from "next/head";

export default function Home() {
  const { theme } = useContext(DarkModeContext);
  return (
    <>
      <Head>
        <title>Portfolio | Rizky Dipahiyat Alghipari</title>
        <meta
          name="description"
          content={
            "Hello, I am Rizky Dipahiyat Alghipari. A fresh computer science graduate who is trying to specialize in frontend & React web development."
          }
        />

        <meta property="og:url" content="https://hirizky.netlify.app" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Portfolio | Rizky Dipahiyat Alghipari"
        />
        <meta
          property="og:description"
          content="Hello, I am Rizky Dipahiyat Alghipari. A fresh computer science graduate who is trying to specialize in frontend & React web development."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dtun3i3dj/image/upload/v1695719655/upload/logo-rda_bphalm.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="hirizky.netlify.app" />
        <meta property="twitter:url" content="https://hirizky.netlify.app" />
        <meta
          name="twitter:title"
          content="Portfolio | Rizky Dipahiyat Alghipari"
        />
        <meta
          name="twitter:description"
          content="Hello, I am Rizky Dipahiyat Alghipari. A fresh computer science graduate who is trying to specialize in frontend & React web development."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dtun3i3dj/image/upload/v1695719655/upload/logo-rda_bphalm.png"
        />
      </Head>
      <div
        className={`${
          theme === "light"
            ? "bg-zinc-800 text-slate-100"
            : "bg-zinc-100 text-slate-800"
        } container mx-auto max-w-full px-3 py-5 md:container md:max-w-full md:px-20 md:py-5`}>
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
                A fresh computer science graduate who is trying to specialize in
                frontend & React web development.
              </span>
            </div>
          </div>
        </div>
        <ProjectCard data={Projects} />
      </div>
    </>
  );
}
