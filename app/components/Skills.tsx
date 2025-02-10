"use client";

import React from "react";
import * as motion from "motion/react-client";
import { SiReact, SiNextdotjs, SiMongodb, SiPostgresql, SiPython, SiTailwindcss, SiJavascript, SiTypescript } from "react-icons/si";
import { FaqAccordion, FAQItem } from "./FaqAccordion";
import styled from 'styled-components';
import Button from "./Button";
import { timeStamp } from "console";

// import { FaqAccordion } from "@/components/ui/faq-chat-accordion";

const defaultData: FAQItem[] = [
    {
      question: "What are your technical skills?",
      answer: "I specialize in full-stack development with expertise in the MERN stack, Next.js, PostgreSQL, and Python.",
      icon: "💻",
      iconPosition: "right",
      id: 1,
    },
    {
      question: "Do you have experience with backend development?",
      answer: "Yes! I have experience building scalable backend systems using Node.js, Express, and PostgreSQL.",
      id: 2,
    },
    {
      question: "Are you proficient in frontend technologies?",
      answer: "Absolutely! I work with React, Next.js, and Tailwind CSS to build modern and responsive user interfaces.",
      id: 3,
    },
    {
      question: "Do you practice Data Structures and Algorithms?",
      answer: "Nope, i'm just a chill guy.",
      // answer: "Yes, I regularly practice DSA using Python on LeetCode to improve problem-solving skills.",
      icon: "📚",
      iconPosition: "left",
      id: 4,
    },
    {
      question: "Can you work with databases?",
      answer: "Yes, I have experience designing and optimizing relational databases using PostgreSQL and NoSQL databases like MongoDB.",
      id: 5,
    },
  ];

  
const skills = [
  { name: "React", icon: <SiReact className="text-blue-400 text-5xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white text-5xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-5xl" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500 text-5xl" /> },
  {name:"JavaScript", icon: <SiJavascript className="text-yellow-500 text-5xl" />},
  {name:"TypeScript", icon: <SiTypescript className="text-blue-500 text-5xl" />},
  { name: "Python", icon: <SiPython className="text-yellow-500 text-5xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-5xl" /> },
];

const Skills = () => {
  
  return (
    <div className="relative z-10 custom:px-10 py-20">
      <div className="h-fit overflow-hidden  ">
             <motion.h1
               initial={{ y: "100%" }}
               whileInView={{ y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.4, ease: "easeInOut" }}
               className="custom:text-[6rem] leading-none  text-5xl text-start  font-semibold  tracking-tight "
             >
               My Bread & Butter 
             </motion.h1>
           </div>

      {/* Skills Grid */}
      
        <div className="flex flex-col w-full items-center justify-center">
            <FaqAccordion 
            data={defaultData}
            className="max-w-[1000px]"
            questionClassName="bg-secondary hover:bg-secondary/80"
            answerClassName="bg-secondary text-secondary-foreground"
            timestamp="Updated at 12:00 PM"
            // timestamp={`last updated at ${time}`}
            />
        <div className="flex flex-col custom:px-16 w-full items-end justify-end">
        {/* <Button/> */}
        </div>
        </div>



        

    </div>
  );
};


export default Skills;