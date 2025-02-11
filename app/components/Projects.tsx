"use client";

import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";

export const Projects = () => {
  return (
    <div className="z-10 relative custom:px-10 px-6 py-20 flex justify-center">
      <div className="w-full max-w-7xl">
        <div className="overflow-hidden h-fit custom:mb-12 mb-10 w-full">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="custom:text-[4rem] text-[3rem]  text-start font-semibold tracking-tight  leading-none"
          >
            Selected Projects
          </motion.h2>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex gap-2 custom:flex-row flex-col">
            <div className="relative group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-[70vh]">
              <Image
                src="/projects/WRITEASY (11).png"
                fill
                alt="project"
                className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
              />
              <Image
                src="/projects/WRITEASY(1).png"
                fill
                alt="project"
                className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
            <div className="relative group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-[70vh]">
              <Image
                fill
                src="/projects/WRITEASY (4) (1).png"
                alt="project"
                className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
              <Image
                src="/projects/WRITEASY (4) (1).png"
                fill
                alt="project"
                className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          </div>
          <div className="relative group w-full h-[90vh] px-10">
            <Image
              src="/projects/EVERYDAY NEEDS (1).png"
              width={1920}
              height={800}
              alt="project"
              className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
            />
            <Image
              src="/projects/EVERYDAY NEEDS.png"
              width={1920}
              height={800}
              alt="project"
              className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
