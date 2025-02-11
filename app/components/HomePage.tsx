"use client";

import * as motion from "motion/react-client";

export const HomePage = () => {
  const text = `I build interactive web apps that make you fall in love with the experience—not me, lol. Clean, engaging, and straight-up.`
  .split(" ") 
  .map((word) => word.trim())
  .filter((word) => word.length > 0);

  return (
    <div className="py-24 custom:px-10 px-6 relative w-full max-w-7xl z-40 flex flex-row items-center justify-center">
      <div className="w-full custom:max-w-[74%] max-w-2xl">
        <div className="custom:h-fit">
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: 12 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="custom:text-[1.6rem] text-[1rem] custom:text-start custom:flex hidden custom:pl-20 font-semibold custom:-mb-10 tracking-tight"
          >
            Hey! It's me
          </motion.h1>
        </div>
        <div className="h-fit overflow-hidden custom:mb-0">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="custom:text-[9.8rem] text-[5em] text-center custom:pl-10 font-semibold custom:-mb-10 tracking-tight"
          >
            Shekhar
          </motion.h1>
        </div>
        <div className="flex custom:items-start items-start custom:justify-end justify-end custom:px-28 px-1 w-full custom:gap-2 gap-8">
          <div className="overflow-hidden h-fit">
            <motion.h1
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              className="font-medium custom:text-md text-sm  tracking-wide custom:pr-14 font-ptmono"
            >
              {"[INTRO]"}
            </motion.h1>
          </div>

          <motion.div className="flex flex-wrap gap-1 w-full custom:max-w-xs  custom:pl-10">
            {text.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 * i, // ✅ Animate each word one by one
                }}
                className="custom:text-md text-sm font-semibold tracking-tight "
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-2 left-0 font-medium px-2 text-lg">
        Scroll Down
      </div>
    </div>
  );
};
