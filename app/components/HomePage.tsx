import Image from "next/image";
import * as motion from "motion/react-client";

export const HomePage = () => {
  return (
    <div className="py-24 w-full max-w-7xl z-40 flex flex-row items-center justify-between">
      <div className="w-full max-w-[50%]  px-  ">
        {/* <div className="bg-green-300 h-fit"> */}

        <motion.h1
        initial={{  x: 0, opacity: 0 }}
        animate={{ x: 12, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        
        // initial={{ y: 100,   opacity: 0 }}
        // animate={{ y: 1, opacity: 1 }}
        
        className="text-[9.2rem] pl-4 font-semibold -mb-10 tracking-tight font-">
          Shekhar
        </motion.h1>
          {/* </div> */}
        <div className="w-full  flex items-end  justify-end">
          <div className="flex   items-start justify-between w-full max-w-md  ">

          <motion.h1
          initial={{  x: 0, opacity: 0 }}
          animate={{ x: -12, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-medium tracking-wide font-ptmono">
            {"[INTRO]"}
          </motion.h1>
          <motion.p 
            initial={{  y: 0, opacity: 0 }}
            animate={{ y: 12, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          className="pl-20   w-[] font-popins font-semibold tracking-tight text-[1rem]
           ">
           I build interactive web apps that make you fall in love with the experience—not me, lol. Clean, engaging, and straight-up addictive.
          </motion.p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 font-medium px-2 text-lg">
        Scroll Down
      </div>
      <div className="w-full max-w-[50%]  flex flex-col items-end  justify-end">
        {/* <div className="w-full  flex items-center justify-center"> */}
            <p className="w-full max-w-[72%] mt-8 font-semibold mb-2  text-start">
              /20
              </p>
              <div className="relative w-full  flex items-end justify-end overflow-hidden">
        {/* Mask effect for the cotton drop */}
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: "100%" }}
          transition={{
            duration: 3,
            ease: [0.19, 1, 0.22, 1],
          }}
          className="absolute inset-0 bg-white z-10"
        />

        <Image
          src="/𝙎𝙖𝙞𝙩𝙖𝙢𝙖.jpeg"
          alt="hero"
          width={1080}
          height={1080}
          className="h-auto w-9/12 pl-4 px-2"
        />
      </div>
            {/* </div> */}
            </div>
    
    </div>
  );
};
