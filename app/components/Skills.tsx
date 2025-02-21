"use client";

import React from "react";
import * as motion from "motion/react-client";
import {
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiFastapi,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiRedux,
} from "react-icons/si";
import { FaqAccordion, FAQItem } from "./FaqAccordion";
import styled from "styled-components";
import Button from "./Button";
import { timeStamp } from "console";

// import { FaqAccordion } from "@/components/ui/faq-chat-accordion";

const defaultData: FAQItem[] = [
  {
    question: "What are your technical skills?",
    answer:
      "I specialize in full-stack development with expertise in the MERN stack, Next.js, PostgreSQL, and Python.",
    icon: "💻",
    iconPosition: "right",
    id: 1,
  },
  {
    question: "Do you have experience with backend development?",
    answer:
      "Yes! I have experience building scalable backend systems using Node.js, Express, and PostgreSQL.",
    id: 2,
  },
  {
    question: "Are you proficient in frontend technologies?",
    answer:
      "Absolutely! I work with React, Next.js, and Tailwind CSS to build modern and responsive user interfaces.",
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
    answer:
      "Yes, I have experience designing and optimizing relational databases using PostgreSQL and NoSQL databases like MongoDB.",
    id: 5,
  },
];

const skills = [
  { name: "React", icon: <SiReact className="text-blue-400 text-5xl" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white text-5xl" />,
  },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-5xl" /> },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-500 text-5xl" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-500 text-5xl" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500 text-5xl" />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-green-500 text-5xl" />,
  },
  { name: "Python", icon: <SiPython className="text-yellow-500 text-5xl" /> },
  { name: "Fast API", icon: <SiFastapi className="text-yellow-500 text-5xl" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-400 text-5xl" />,
  },
  {
    name: "Git",
    icon: <SiGit className="text-red-400 text-5xl" />,
  },
  {
    name: "GitHub",
    icon: <SiGithub className="text-white text-5xl" />,
  },
  {
    name: "Docker",
    icon: <SiDocker className="text-blue-600 text-5xl" />,
  },
  {
    name: "Vercel",
    icon: <SiVercel className="text-white text-5xl" />,
  },
  {
    name: "Redux Toolkit",
    icon: <SiRedux className="text-purple-400 text-5xl" />,
  },
];

const floatingAnimation = {
  animate: {
    y: ["0%", "-8%"],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  }
};

const Skills = () => {
  const [showFAQ, setShowFAQ] = React.useState(true);

const Button = ({ onClick, children, className }: { 
  onClick: () => void;
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <StyledWrapper>
      <button className="cta flex justify-center items-center" onClick={onClick}>
        <span>Click me</span>
        <svg width="15px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5" />
          <polyline points="8 1 12 5 8 9" />
        </svg>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .cta {
    position: relative;
    margin: auto;
    padding: 12px 18px;
    transition: all 0.2s ease;
    border: none;
    background: none;
    cursor: pointer;
  }

  .cta:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 50px;
    background: #b1dae7;
    width: 45px;
    height: 45px;
    transition: all 0.3s ease;
  }

  .cta span {
    position: relative;
    font-family: "Ubuntu", sans-serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: #234567;
  }

  .cta svg {
    position: relative;
    top: 0;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: #234567;
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all 0.3s ease;
  }

  .cta:hover:before {
    width: 100%;
    background: #b1dae7;
  }

  .cta:hover svg {
    transform: translateX(0);
  }

  .cta:active {
    transform: scale(0.95);
  }`;



  

  return (
    <div className="relative z-10 custom:px-10 px-6 py-20">
      <div className="h-fit overflow-hidden">
        <motion.h1
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="custom:text-[5rem] leading-none text-5xl text-start font-semibold tracking-tighter"
        >
          My Bread & Butter
        </motion.h1>
      </div>

      <div className="flex justify-start my-8">
        <Button
          onClick={() => setShowFAQ(!showFAQ)}
         
        >
          {showFAQ ? "CLICK ME" : "CLOSE ME"}
        </Button>
      </div>

      <div className="flex flex-col w-full items-center justify-center">
        {showFAQ ? (
          <FaqAccordion
            data={defaultData}
            className="max-w-[1000px]"
            questionClassName="bg-secondary hover:bg-secondary/80"
            answerClassName="bg-secondary text-secondary-foreground"
            timestamp="Updated at 12:00 PM"
          />
        ) : (
          <div className="grid grid-cols-2 custom:grid-cols-6 gap-8 w-full">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-2 p-4 transition-all"
                variants={floatingAnimation}
                animate="animate"
                custom={index}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {skill.icon}
                </motion.div>
                <span className="text-lg font-medium text-center">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
