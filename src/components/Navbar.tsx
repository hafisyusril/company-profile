// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Bisa diganti sesuai icon library kamu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#0F172A] text-[#D6E1FF] shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link href="/" className="text-xl font-bold text-green-400">
          MyWebsite
        </Link>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-[#D6E1FF] focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Nav Links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-[#0F172A] md:bg-transparent px-4 md:px-0 py-4 md:py-0`}
        >
          <Link href="/" className="block py-2 md:py-0 hover:text-green-400">
            Home
          </Link>
          <Link href="/about" className="block py-2 md:py-0 hover:text-green-400">
            About Us
          </Link>
          <Link href="/services" className="block py-2 md:py-0 hover:text-green-400">
            Services
          </Link>
          <Link href="/teams" className="block py-2 md:py-0 hover:text-green-400">
            Teams
          </Link>
          <Link href="/blog" className="block py-2 md:py-0 hover:text-green-400">
            Blog List
          </Link>
          <Link href="/blog/create" className="block py-2 md:py-0 hover:text-green-400">
            Create Blog
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
