import React from "react";

const SkillCard = () => {
  return (
    <div className="flex gap-x-5 py-5">
      <div className="w-1/2">
        <span className="border-b-2 text-sm md:text-md">Main Skills</span>
      </div>
      <div className="w-full px-2 text-justify ">
        <span className="font-extralight text-sm md:text-md">
          HTML, CSS, Javascript, ReactJS, NextJS, TailwindCSS, MongoDB,
          Bootstrap, Redux NodeJS, ExpressJS, Laravel.
        </span>
      </div>
    </div>
  );
};

export default SkillCard;
