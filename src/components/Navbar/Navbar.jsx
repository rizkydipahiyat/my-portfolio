"use client";

import React, { Fragment, useContext, useEffect, useState } from "react";
import {
  IoPartlySunnyOutline,
  IoCloudyNight,
  IoMenuOutline,
  IoCloseOutline,
} from "react-icons/io5";
import { DarkModeContext } from "@/context/DarkModeContext";
import { VscCode } from "react-icons/vsc";
import Link from "next/link";
import menu from "@/lib/menu";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { theme, toggleDarkMode } = useContext(DarkModeContext);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState("");

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuActive = (pathname) => {
    setCurrentPage(pathname.pathname);
  };

  return (
    <nav
      className={`${
        theme === "light"
          ? "bg-zinc-800 text-zinc-100"
          : "bg-zinc-100 text-slate-800"
      } flex items-center justify-between container mx-auto max-w-full h-[70px] top-0 sticky z-10 px-5 md:px-20`}>
      <Link href="/">
        <div className="flex items-center gap-x-2">
          <h2 className="text-xl md:text-2xl font-bold">T</h2>
          <VscCode size={24} />
        </div>
      </Link>
      <div className="flex items-center gap-x-3">
        <div className="text-md md:text-lg font-normal">
          <ul
            className={`${
              theme === "light"
                ? "bg-zinc-800 text-zinc-100"
                : "bg-zinc-100 text-slate-800"
            } ${
              isOpen ? "right-0" : "-right-[300px]"
            } flex flex-col justify-start fixed gap-y-5 py-8 rounded-bl-lg rounded-br-lg top-[70px] w-[200px] items-center transition-all duration-300 ease-in-out md:flex-row md:items-center md:gap-x-3 md:top-0 md:right-0 md:mr-[130px] md:py-5 md:transition-none`}>
            {menu.map((item) => {
              return (
                <Fragment key={item.id}>
                  <li className="cursor-pointer">
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                        router.push(`${item.pathname}`);
                        handleMenuActive(item, item.pathname);
                      }}
                      className={`${
                        currentPage === item.pathname ? "font-bold" : ""
                      }`}>
                      {item.title}
                    </span>
                  </li>
                </Fragment>
              );
            })}
          </ul>
        </div>
        <div className="md:-mt-2">
          <span>
            {theme === "light" ? (
              <IoPartlySunnyOutline size={28} onClick={toggleDarkMode} />
            ) : (
              <IoCloudyNight size={28} onClick={toggleDarkMode} />
            )}
          </span>
        </div>
        <div className="mt-1 block md:hidden">
          <span>
            {isOpen ? (
              <IoCloseOutline size={28} onClick={handleMenu} />
            ) : (
              <IoMenuOutline size={28} onClick={handleMenu} />
            )}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
