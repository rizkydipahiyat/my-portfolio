import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";

const CollabCard = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:py-5 md:mb-20">
      <div className="flex flex-col w-full mb-5 md:w-1/4">
        <span className="md:text-lg text-md font-medium md:font-semibold text-justify">
          I would be happy to, if you&apos;d like to collaborate on your next
        </span>
        <div className="flex items-center md:gap-x-2">
          <span className="md:text-lg md:font-semibold text-md font-medium text-justify">
            project.
          </span>
          <IoArrowForwardSharp className="hidden" size={20} />
        </div>
      </div>
      <div className="flex flex-col gap-y-3 md:gap-y-5">
        <span className="md:text-lg font-normal text-justify">
          mailto: <a href="mailto:rizkydipahiyat76@gmail.com">rizkydipahiyat</a>
        </span>
        <div className="font-normal text-md cursor-pointer">
          <a
            href={
              "https://drive.google.com/file/d/1XzLoQ9IyEoztFpNWU1l-rVAOR9TFI8Uc/view?usp=sharing"
            }
            target="blank"
            className="border-b-2">
            View Curriculum Vitae
          </a>
        </div>
      </div>
    </div>
  );
};

export default CollabCard;
