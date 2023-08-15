import React from "react";

const SkillSoftwareCard = () => {
  return (
    <div className="flex gap-x-5 py-12">
      <div className="left w-1/2">
        <span className="border-b-2 text-sm md:text-md">Main Software</span>
      </div>
      <div className="right w-full text-justify ">
        <span className="font-extralight text-sm md:text-md">
          Visual Studio Code, Figma, Postman.
        </span>
      </div>
    </div>
  );
};

export default SkillSoftwareCard;
