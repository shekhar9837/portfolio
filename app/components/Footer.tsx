"use client";

export default function Footer() {
  return (
    <footer className="z-50 bg-black text-white max-w-7xl min-h-[60vh] md:p-12 p-6 flex flex-col justify-between font-mono">
      {/* Top Section */}

      <div className=" flex flex-col md:flex-row md:justify-between items-start md:items-center w-full">
        <h2 className="text-2xl font-bold">SHEKHAR</h2>
        <p className="font-mono text-sm md:text-base">34.0549° N, 118.2426° W</p>
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-8">
        {/* Social Links */}
        <div className="space-y-4 text-left md:text-right">
          <h3 className="text-neutral-400">[Social]</h3>
          <nav className="space-y-2">
            <a href="https://www.instagram.com/shekhar7____" target="_blank" rel="noopener noreferrer" className="block hover:text-neutral-300 transition">Instagram</a>
            <a href="https://x.com/shekhar9837" target="_blank" rel="noopener noreferrer"   className="block hover:text-neutral-300 transition">X</a>
            <a href="https://www.linkedin.com/in/shekhar9837" target="_blank" rel="noopener noreferrer" className="block hover:text-neutral-300 transition">LinkedIn</a>
            <a href="https://dev.to/shekhar9837" target="_blank" rel="noopener noreferrer" className="block hover:text-neutral-300 transition">Dev.to</a>
          </nav>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-neutral-400">[Contact]</h3>
          <a href="mailto:hi@shekharcodes98@gmail.com" target="_blank" rel="noopener noreferrer" className="block hover:text-neutral-300 transition">
            hi@shekharcodes98@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full mt-8 text-sm">
        <p>© 2024. ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
}
