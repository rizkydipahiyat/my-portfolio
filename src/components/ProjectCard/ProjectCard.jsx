import { DarkModeContext } from "@/context/DarkModeContext";
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ data }) => {
  const { theme } = useContext(DarkModeContext);

  const reversedData = [...data].reverse();

  return (
    <div
      className={
        theme === "light"
          ? "bg-zinc-800 text-slate-100"
          : "bg-zinc-100 text-slate-800"
      }>
      {reversedData.map((project) => {
        return (
          <div key={project.id}>
            <div className="md:flex space-y-5 md:mt-20 mt-5">
              <div className="md:w-1/2">
                <div className="md:flex md:flex-col space-y-5 md:w-[400px] gap-y-[60px]">
                  <h3 className="projectName font-medium text-lg">
                    0{project.id} / {project.title}
                  </h3>
                  <p className="projectDesc font-extralight text-md text-justify">
                    {project.desc}
                  </p>
                  <div className="projectStack font-medium md:font-bold">
                    Stack:
                    {project.stack.map((tech, index) => {
                      return (
                        <span
                          className="font-normal text-sm text-justify px-1 md:px-2"
                          key={index}>
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                  <div className="font-medium cursor-pointer">
                    <Link href={`${project.url}`} target="blank">
                      <span className="border-b-2">See more ↗</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="bg-slate-500 md:w-full md:h-[350px]"
                />
              </div>
            </div>
            <hr className="mt-20 mb-20" />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
