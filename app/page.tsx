import Image from "next/image"
import { HomePage } from "./components/HomePage"


export default function Page() {
  return (
    <section id="hero" className="relative w-full">
    {/* Background grid */}

    <div className="absolute inset-0 w-full h-full grid grid-cols-8 gap-6 px-12 pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="border-l border-r border-zinc-300 h-full" />
      ))}
    </div>
    
    {/*  components here */}

    <div className="px-10 flex flex-col items-center justify-center py-16">
      <HomePage />
      </div>
      <HomePage />
  
    
     
  </section>
  )
}
