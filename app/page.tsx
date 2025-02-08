"use client";

import Image from "next/image"
import { HomePage } from "./components/HomePage"
import { Projects } from "./components/Projects"
import IntroductionPage from "./components/IntroductionPage"
import Skills from "./components/Skills"
import Footer from "./components/Footer"


export default function Page() {
  return (
    <section id="hero" className="relative w-full px-6">
    {/* Background grid */}

    <div className="absolute inset-0 w-full h-full grid custom:grid-cols-8 grid-cols-4 gap-6 px-6 custom:px-12 pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="border-l border-r border-zinc-300 h-full" />
      ))}
    </div>
    
    {/*  components here */}

    <div className="custom:px-10 flex flex-col items-center justify-center py-16">
      <HomePage />
      </div>
      <Projects/>
      <IntroductionPage/>
      <Skills/>
  
    
     
  </section>
  )
}
