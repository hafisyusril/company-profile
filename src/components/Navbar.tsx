"use client";

import Link from "next/link";
import Image from "next/image";
import NavLinks from "./navbar/NavLinks";
import AuthButtons from "./navbar/AuthButtons";
import MobileMenu from "./navbar/MobileMenu";

const Navbar = () => {
  return (
    <nav className="container mx-auto bg-[#f4f2ee] px-4 md:px-16 py-4 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/hore.avif"
            alt="Logo"
            width={40}
            height={40}
            className="cursor-pointer"
          />
          <span className="text-[#24272B] font-semibold text-xl">Hore</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLinks />
          <AuthButtons />
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
