"use client";

import Link from "next/link";
import React, { useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { RiTwitterXFill } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null as number | null);
  // const items = ["HOME", "WORK", "ABOUT"];
  const items =[
    { name:"HOME",  link:'/'},
    { name:"WORK",  link:'/work'},
    { name:"ABOUT",  link:'/about'}
  ] 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ContactButton = () => (
    <button
      type="submit"
      className="flex justify-center gap-2 items-center mx-auto dark:border-neutral-900 border backdrop-blur-md  isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full dark:before:bg-zinc-50 before:bg-neutral-950 dark:hover:text-black hover:text-zinc-100 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden  rounded-md group"
    >
      CONTACT
      <svg
        className="w-7 h-7 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border dark:border-zinc-100 border-gray-400 group-hover:border-none p-2 rotate-45"
        viewBox="0 0 16 19"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
          className="fill-gray-800 group-hover:fill-gray-800"
        />
      </svg>
    </button>
  );

  return (
    <motion.nav
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1.4, ease: "easeInOut" }}
      className="navbar font-ptmono z-50 absolute top-2 w-full px-6 flex items-center flex-flex justify-between max-w-7xl"
    >
      <div className="name">
        <Link href={"/"}>
          <p className="capitalize font-">SHEKHAR</p>
        </Link>
      </div>


      <div className="custom:flex hidden">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative h-5  w-16  overflow-hidden flex items-center justify-center cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence initial={false}>
              {hoveredIndex === index ? (
                <motion.p
                  key={`new-${item}`}
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  exit={{ y: -50 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  className="absolute font-medium tracking-wider cursor-pointer"
                  >
                  <Link href={item.link}>
                  {index === 2 ? item.name : `${item.name}`}
                  </Link>
                </motion.p>
              ) : (
                <motion.p
                  key={`old-${item}`}
                  initial={{ y: 50 }} // Fix: Start from below
                  animate={{ y: 0 }} // Fix: Animate to normal position
                  exit={{ y: -50 }} // Fix: Exit upwards
                  transition={{
                    duration: 1.3,
                    ease: "easeInOut",
                  }}
                  className="absolute font-medium tracking-wider cursor-pointer"
                  >
                  <Link href={item.link}>
                  {index === 2 ? item.name : `${item.name}`}
                  </Link>
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      <div className="custom:flex hidden gap-2">
      <ThemeToggle/>
        <ContactButton />
      </div>

      <div className="custom:hidden ">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white rounded-md border bg-neutral-800  px-3 py-2   font-ptmono"
        >

          {isMenuOpen ? "CLOSE" : "MENU"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute  flex flex-col items-start justify-start top-full left-0 right-0 bg-white  py-4 px-6 md:hidden"
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="py-2"
              >
                <Link
                  href={`/${item.link}`}
                  className="text-gray-800 hover:text-gray-600"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: items.length * 0.1 }}
              className="py-2"
            >
              CONTACT
              <div className="flex  flex-col gap-4 py-10">
                <div className="overflow-hidden h-fit">
                  <motion.h1
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    
                    className="font-medium text-md tracking-wide custom:pr-14 font-ptmono"
                  >
                    {"[FOLLOW ME]"}
                  </motion.h1>
                </div>
                <div className="flex gap-4">
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CiLinkedin />
                  </Link>
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RiTwitterXFill />
                  </Link>
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
