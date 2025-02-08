"use client";

import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";

export const Projects = () => {
  return (
    <div className="z-50 relative custom:px-10 py-20">
      <div className="overflow-hidden h-fit custom:mb-12 mb-10">
        <motion.h2
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="custom:text-[4rem] text-[3rem]  text-start font-semibold tracking-tight "
        >
          Selected Projects
        </motion.h2>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex gap-2 custom:flex-row flex-col">
          <div className="relative group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 aspect-[1/1]">
            <Image
              src="/𝙎𝙖𝙞𝙩𝙖𝙢𝙖.jpeg"
              fill
              alt="project"
              className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
            />
            <Image
              src="/𝙎𝙖𝙞𝙩𝙖𝙢𝙖.jpeg"
              fill
              alt="project"
              className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
          <div className="relative group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 aspect-[1/1]">
            <Image
              src="/𝙎𝙖𝙞𝙩𝙖𝙢𝙖.jpeg"
              fill
              alt="project"
              className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
            />
            <Image
              src="/𝙎𝙖𝙞𝙩𝙖𝙢𝙖.jpeg"
              fill
              alt="project"
              className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
        </div>
        <Image
          src="https://framerusercontent.com/images/uok7AcoIu4S6KOnbXtkOrgO6bk.svg"
          width={1920}
          height={1080}
          alt="project"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};
