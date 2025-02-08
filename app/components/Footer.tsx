"use client";

export default function Footer() {
  return (
    <footer 
    // data-scroll  
    // data-scroll-delay="0.3"
      className="bg-black text-white min-h-[90vh] p-8 flex flex- justify-between font-mono">
      <div className="flex items-start flex-col justify-between">
        <h2 className="text-xl">SHEKHAR</h2>
        <p className="font-mono">34.0549° N, 118.2426° W</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="space-y-2">
        </div>

        <div className="space-y-12 md:text-right">
          <div className="space-y-4">
            <h3 className="text-neutral-400">[Social]</h3>
            <nav className="space-y-2">
              <a href="#" className="block hover:text-neutral-300">
                Instagram
              </a>
              <a href="#" className="block hover:text-neutral-300">
                X
              </a>
              <a href="#" className="block hover:text-neutral-300">
                Linkedin
              </a>
              <a href="#" className="block hover:text-neutral-300">
                Dribbble
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-neutral-400">[Contact]</h3>
            <a href="mailto:hi@katerina.com" className="block hover:text-neutral-300">
              hi@katerina.com
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-end gap-4">
            <p className="text-sm">©2024. ALL RIGHT RESERVED</p>           
          </div>
        </div>
      </div>
    </footer>
  )
}

