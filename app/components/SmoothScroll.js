"use client";
import { useEffect, useRef } from "react";

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window === "undefined" || !scrollRef.current) return;

    // Dynamically import Locomotive Scroll
    const initScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 0.3,
        lerp: 0.1,
        smartphone: {
          smooth: true
        },
        tablet: {
          smooth: true
        }
      });

      // Cleanup function
      return () => {
        if (scroll) scroll.destroy();
      };
    };

    initScroll();
  }, []);

  return (
    <main 
      ref={scrollRef} 
      data-scroll-container 
      className="relative w-full min-h-screen"
    >
      {children}
    </main>
  );
};

export default SmoothScroll;