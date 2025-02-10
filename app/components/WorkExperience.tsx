"use client";

import React from "react";
import * as motion from "motion/react-client";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

const WorkExperience = () => {
  const data = [
    {
      title: "Experience",
      content: (
        <div>
          <p className="flex flex-wrap items-center gap-2  text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            <strong>Software Development Intern</strong> | <strong className="flex gap-2 items-center">
              <Image
              src={'/logo.png'}
              width={50}
              height={50}
              alt="logo"
              className="rounded-full h-8 w-8"
            />Kidjifg Technology (Oct 2024 - Jan 2025)
            </strong> 

          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Developed <strong>scalable REST APIs</strong> using FastAPI & Node.js, improving backend performance.</li>
            <li>Built <strong>responsive UI components</strong> with React.js, enhancing user experience.</li>
            <li>Integrated <strong>React-Redux</strong> for state management, improving data handling efficiency.</li>
            {/* <li>Refactored & optimized UI workflows, reducing load time by **30%**.</li> */}
            <li>Debugged & resolved issues across frontend & backend.</li>
          </ul>
          <div className="inline-flex flex-wrap gap-2 mt-2">
            <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded">React.js</span>
            <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded">FastAPI</span>
            <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded">Node.js</span>
            <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded">Redux</span>
            <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded">MongoDB</span>
            <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded">Firebase</span>
            <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded">UI Optimization</span>
          </div>
        </div>
      ),
    },
    
    {
      title: "Projects",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            <strong>WriteEasy</strong> - AI-powered content generation tool
          </p>
          <p className="text-neutral-600 max-w-xl dark:text-neutral-300 text-xs md:text-sm font-normal mb-4">
            WriteEasy is an AI-driven platform that helps users generate high-quality content efficiently. 
            It simplifies content creation for blogs, articles, and scripts, saving users valuable time.
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Empowered <strong>20+ users</strong> to generate high-quality content, saving over <strong>1,000 hours</strong>.</li>
            <li>Integrated <strong>Google Authentication</strong>, reducing sign-up time by <strong>40%</strong>.</li>
            <li>Designed a <strong>user-friendly UI</strong>, increasing engagement by <strong>30%</strong>.</li>
          </ul>
          <div className="inline-flex flex-wrap  gap-2 mt-2">
            <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded">Next.js</span>
            <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded">PostgreSQL</span>
            <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded">Node.js</span>
            <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded">FastAPI</span>
            <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded">TypeScript</span>
            <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded">Vercel</span>
          </div>
          <div className="mt-4">
            <a href="https://writeasy.xyz" target="_blank" rel="noopener noreferrer" 
               className="text-blue-600 dark:text-blue-400 hover:underline text-xs md:text-sm">
              🔗 Live Demo
            </a>
          </div>
        </div>
      ),
    }
    
    
  ];
      
  return (
    <div className="relative z-50  custom:px-10 py-20 w-full max-w-7xl">

      <div className="w-full">
      <Timeline data={data} />
    </div>

    </div>
  );
};

export default WorkExperience;
