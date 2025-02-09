"use client";

import React from "react";
import * as motion from "motion/react-client";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

const WorkExperience = () => {
    const data = [
        // {
        //   title: "2024",
        //   content: (
        //     <div>
        //       <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
        //         Built and launched Aceternity UI and Aceternity UI Pro from scratch
        //       </p>
        //       <div className="grid grid-cols-2 gap-4">
        //         <Image src="https://assets.aceternity.com/templates/startup-1.webp" alt="startup template" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow" />
        //         <Image src="https://assets.aceternity.com/templates/startup-2.webp" alt="startup template" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow" />
        //       </div>
        //     </div>
        //   ),
        // },
        {
          title: "Experience",
          content: (
            <div>
              {/* <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                <strong>Software Development Engineer (SDE)</strong> | Bluestock Fintech (Aug 2024 - Sep 2024)
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Increased user engagement by 20% through feature enhancements.</li>
                <li>Optimized PostgreSQL queries, improving data retrieval efficiency.</li>
                <li>Assisted in debugging and resolving critical production issues.</li>
              </ul> */}
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                <strong>Software Development Intern</strong> | Kidjifg Technology (Oct 2024 - Jan 2025)
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Developed responsive front-end components using React.js and Tailwind CSS.</li>
                <li>Built and optimized RESTful APIs with Node.js, improving data handling efficiency by 30%.</li>
                <li>Debugged and resolved issues, reducing bugs by 20%.</li>
              </ul>
            </div>
          ),
        },
        {
          title: "Projects",
          content: (
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                <strong>WriteEasy</strong> | Next.js, PostgreSQL, TypeScript
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Empowered 100+ users to generate high-quality content, saving over 1,000 hours.</li>
                <li>Integrated Google Authentication, reducing sign-up time by 40%.</li>
                <li>Designed a user-friendly interface, increasing engagement by 30%.</li>
              </ul>
            </div>
          ),
        },
      ];
      
  return (
    <div className="relative z-50  custom:px-10 py-20 w-full max-w-7xl">
      {/* <div className="h-fit overflow-hidden  ">
        <motion.h1
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="custom:text-[7rem] text-5xl text-start  font-semibold  tracking-tight "
        >
          Introduction
        </motion.h1>
      </div> */}

      <div className="w-full">
      <Timeline data={data} />
    </div>

    </div>
  );
};

export default WorkExperience;
