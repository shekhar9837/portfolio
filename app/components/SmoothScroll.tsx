"use client";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const scrollRef = useRef<HTMLElement | null>(null);
  const scrollInstance = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !scrollRef.current) return;

    // Dynamically import Locomotive Scroll
    const initScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      scrollInstance.current = new LocomotiveScroll({
        //@ts-ignore ignore it
        el: scrollRef.current!,
        smooth: true,
        multiplier: 0.3,
        lerp: 0.1,
        smartphone: { smooth: true },
        tablet: { smooth: true },
      });
    };

    initScroll();

    return () => {
      if (scrollInstance.current) {
        scrollInstance.current.destroy();
        scrollInstance.current = null;
      }
    };
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
