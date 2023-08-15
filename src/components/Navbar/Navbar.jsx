"use client";

import React, {
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleDarkMode } = useContext(DarkModeContext);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={
          theme === "light"
            ? "bg-zinc-800 text-zinc-100 container mx-auto w-full px-3 py-5 top-0 sticky z-10 md:container md:px-10 md:py-5"
            : "bg-zinc-100 text-slate-800 container mx-auto w-full px-3 py-5 top-0 sticky z-10 md:container md:px-10 md:py-5"
        }>
        <nav className="flex items-center justify-between">
          <Link href="/">
            <div className="logo flex items-center gap-x-2">
              <h2 className="text-md font-medium">RizkyDev</h2>
              <VscCode size={28} />
            </div>
          </Link>
          <div className="menu md:hidden lg:hidden flex items-center gap-x-3">
            <span className="cursor-pointer" onClick={toggleDarkMode}>
              {theme === "light" ? (
                <IoPartlySunnyOutline className="-mt-1" size={28} />
              ) : (
                <IoCloudyNight className="-mt-1" size={28} />
              )}
            </span>
            {isOpen ? (
              <IoCloseOutline size={28} onClick={handleMenu} />
            ) : (
              <IoMenuOutline size={28} onClick={handleMenu} />
            )}
          </div>
          <div className="menuList hidden md:flex items-center justify-end">
            <ul className="flex items-center gap-x-6 font-normal text-md">
              {menu.map((item) => {
                return (
                  <Fragment key={item.id}>
                    <li className="cursor-pointer">
                      <Link href={`${item.pathname}`}>{item.title}</Link>
                    </li>
                  </Fragment>
                );
              })}
              <li className="cursor-pointer" onClick={toggleDarkMode}>
                {theme === "light" ? (
                  <IoPartlySunnyOutline className="-mt-1" size={28} />
                ) : (
                  <IoCloudyNight className="-mt-1" size={28} />
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {isOpen && (
        <div className="relative">
          <div
            className={`${
              theme === "light"
                ? "bg-zinc-700 text-zinc-100"
                : "bg-zinc-100 text-slate-700"
            } absolute md:hidden w-[200px] px-3 py-6 right-0 rounded-br-lg rounded-bl-lg z-[1000]`}>
            <ul className="flex flex-col items-center gap-y-5 font-normal text-md">
              {menu.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <li
                      className={`${
                        theme === "light"
                          ? "hover:bg-zinc-600"
                          : "hover:bg-slate-300"
                      } cursor-pointer w-full text-center p-2`}>
                      <Link href={`${item.pathname}`}>{item.title}</Link>
                    </li>
                  </Fragment>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
