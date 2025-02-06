import Link from 'next/link';
import React from 'react';

export const Navbar = () => {
    return (
    <nav className="navbar absolute top-5 w-full px-6 flex items-center flex-flex justify-between">

      <div className="name">
        <Link href={"/"}>Shekhar</Link>
      </div>
      <ul className="flex items-center gap-3 font-bold">
      <Link href={"/"}>HOME</Link>
      <div>/</div>
      <Link href={"/"}>WORK</Link>
      <div>/</div>
      <Link href={"/"}>ABOUT</Link>

      </ul>
      <div className="right-contact">
        <button>Contact</button>
      </div>
    </nav>
  );
}

