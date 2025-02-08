import Image from "next/image";
import * as motion from "motion/react-client";

export const HomePage = () => {
  return (
    <div className="py-24 relative w-full max-w-7xl z-40 flex flex-row items-center justify-center ">
      <div data-scroll data-scroll-delay="0.2" className="w-full  max-w-[74%] bg-red-  px-  ">
        {/* <div className="bg-green-300 h-fit"> */}

        <motion.h1
          initial={{x: 0, opacity:0}}
          animate={{x: 10, opacity:1}}
          transition={{duration: 0.4, ease:"linear"}}
          className="text-[1.6rem]   w-fit pl-4 bg-red- font-semibold -mb-10 tracking-tight font-"

        >
          Hey! It's me
        </motion.h1>

        <motion.h1
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 12, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          // initial={{ y: 100,   opacity: 0 }}
          // animate={{ y: 1, opacity: 1 }}

          className="text-[9.8rem] pl-10 font-semibold -mb-10 tracking-tight font-"
        >
          Shekhar
        </motion.h1>
        {/* </div> */}
          <div className="flex relative  items-start justify-end px-28 w-full gap-10 bg-red-  bg-green- ">
        {/* <div className="w-full max-w-[70%] bg-green-200  flex items-start  justify-center"> */}
            <motion.h1
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: -12, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-medium tracking-wide pt-2 pr-6 font-ptmono bg-green-"
            >
              {"[INTRO]"}
            </motion.h1>
            <motion.p
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: 12, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className=" max-w-xs bg-red- pr-6 px-2  font-poppins font-semibold tracking-tight text-[]
           "
            >
              I build interactive web apps that make you fall in love with the
              experience—not me, lol. Clean, engaging, and straight-up
              addictive.
            </motion.p>
        {/* </div> */}
          </div>
      </div>

      <div className="absolute bottom-2 left-0 font-medium px-2 text-lg">
        Scroll Down
      </div>
      {/* <div className="w-full max-w-[50%] flex flex-col items-end justify-end">
        <p className="w-full max-w-[72%] mt-8 font-semibold mb-2 text-start">
          /20
        </p>
        <div className="h-fit bg-green-400 w-fit flex items-center justify-center overflow-hidden">
          <motion.img
            src="/𝙎𝙖𝙞𝙩𝙖𝙢𝙖.jpeg"
            alt="hero"
            width={1080}
            height={1080}
            className="h-auto w-9/12 pl-4 px-2"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
          />
        </div> */}
      {/* </div> */}
    </div>
  );
};
