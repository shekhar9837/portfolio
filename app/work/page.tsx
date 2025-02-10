import React from 'react'
import * as motion from "motion/react-client";
import { BentoGrid } from '../components/BentoGrid';

const Work = () => {
  return (
     <div className="relative z-10  custom:px-10 py-20 px-6  w-full max-w-7xl">
       <div className="h-fit overflow-hidden  ">
         <motion.h1
           initial={{ y: "100%" }}
           whileInView={{ y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.4, ease: "easeInOut" }}
           className="custom:text-[7rem] text-5xl text-start  font-semibold  tracking-tight "
         >
           Selected Work
         </motion.h1>
       </div>
 
       <div className="w-full  flex custom:flex-row flex-col justify-center custom:py-20 py-10">
           <motion.h1 className="font-medium tracking-wide custom:mb-0 mb-10   custom:pr-14 font-ptmono bg-green-">
             {"[ABOUT]"}
           </motion.h1>
 
         <motion.div
           className="custom:w-[60%] flex items-start flex-col justify-start"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, ease: "easeInOut" }}
         >
           <p className="custom:text-start font-poppins font-semibold tracking-tight">
             As a full stack developer, I specialize in building robust and scalable web applications. My expertise spans both front-end and back-end technologies, allowing me to create seamless user experiences and efficient server-side logic. I am passionate about leveraging modern frameworks and tools to deliver high-quality software solutions that meet the needs of users and businesses alike.
           </p>
           <p className="custom:text-start font-poppins font-semibold tracking-tight pt-10">
             Throughout my projects, I emphasize clean code, maintainability, and performance optimization. I enjoy collaborating with cross-functional teams to bring innovative ideas to life and continuously strive to stay updated with the latest industry trends and best practices. My goal is to contribute to impactful projects that drive success and growth.
           </p>
 
           <button
             type="submit"
             className="flex justify-center gap-2 items-start mt-10 dark:border-neutral-900 border backdrop-blur-md  isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full dark:before:bg-zinc-50 before:bg-neutral-950 dark:hover:text-black hover:text-zinc-100 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden  rounded-md group"
             >
             MORE
             <svg
               className="w-7 h-7 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
               viewBox="0 0 16 19"
               xmlns="http://www.w3.org/2000/svg"
             >
               <path
                 d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                 className="fill-gray-800 group-hover:fill-gray-800"
               />
             </svg>
           </button>
       </motion.div>
       </div>

       {/* <div className='w-full py-20 bg-red-200'> */}

       <div className=" px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-7xl"
      >
        <BentoGrid />
      </motion.div>
    </div>

       {/* </div> */}
 
     </div>
   );
}

export default Work