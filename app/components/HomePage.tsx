"use client";


import * as motion from "motion/react-client";

export const HomePage = () => {
  const text = `I build interactive web apps that \n  
    make you fall in love with the \n  
    experience—not me, lol. Clean, \n
    engaging, and straight-up.`.split("\n");

  return (
    <div className="py-24 relative w-full max-w-7xl z-40 flex flex-row items-center justify-center ">
      <div
        // data-scroll
        // data-scroll-delay="0.2"
        className="w-full  custom:max-w-[74%] max-w-2xl "
      >
        {/* <div className="bg-green-300 h-fit"> */}
        <div className="custom:h-fit  ">
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: 12 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="custom:text-[1.6rem] text-[1rem] custom:text-start custom:flex hidden    custom:pl-20 bg-red- font-semibold custom:-mb-10 tracking-tight font-"
          >
            Hey! It's me
          </motion.h1>
        </div>
        <div className="h-fit overflow-hidden custom:mb-0  ">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="custom:text-[9.8rem] text-[5rem] text-center custom:pl-10 font-semibold custom:-mb-10 tracking-tight "
          >
            Shekhar
          </motion.h1>
        </div>
        {/* </div> */}
        <div className="flex   custom:items-start items-start custom:justify-end justify-end  custom:px-28  w-full custom:gap-2 gap-10 ">
          {/* <div className="w-full max-w-[70%] bg-green-200  flex items-start  justify-center"> */}
          <div className="overflow-hidden h-fit ">
            <motion.h1
              // initial={{ opacity: 0 }}
              // animate={{  opacity: 1 }}
              // transition={{ duration: 0.6, ease: "easeOut", delay:1 }}
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              className="font-medium tracking-wide    custom:pr-14 font-ptmono bg-green-"
            >
              {"[INTRO]"}
            </motion.h1>
          </div>

          <div className="flex flex-col custom:items-start  custom:pl-5  custom:flex-wrap  custom:w-full w-fit custom:max-w-xs ">
            {text.map((el, i) => (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1.4,
                  delay: 1.2 + i / 10, // Added 2 second delay
                }}
                key={i}
                className="custom:max-w-xs w-fit custom:text-start   font-poppins font-semibold tracking-tight custom:mx-1"
              >
                {" "}
                {el}{" "}
              </motion.p>
            ))}
          </div>
          {/* </div> */}
        </div>
      </div>

      <div className="absolute bottom-2 left-0 font-medium px-2 text-lg">
        Scroll Down
      </div>
    </div>
  );
};
