"use client";

import Image from "next/image"
import { HomePage } from "./components/HomePage"
import { Projects } from "./components/Projects"
import IntroductionPage from "./components/IntroductionPage"
import Skills from "./components/Skills"
import WorkExperience from "./components/WorkExperience"

export default function Page() {
  return (
    <section id="hero">
      {/* Background grid */}
      <div className="absolute max-w-7xl inset-0 w-full h-full grid custom:grid-cols-8 grid-cols-3 gap-6 px-6 custom:px-12 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="border-l border-r dark:border-neutral-900 border-slate-200 h-full z-10" />
        ))}
      </div>

      <div className="custom:px-10 flex flex-col items-center justify-center py-16">
        <HomePage />
      </div>
      
      <div className="w-full max-w-7xl">
        <Projects />
        <WorkExperience />
        <IntroductionPage />
        <Skills />
      </div>
    </section>
  )
}
