"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Services", href: "/products" },
    { label: "Teams", href: "/teams" },
    { label: "Blog List", href: "/blogs" },
    { label: "Create Blog", href: "/write" },
  ];

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

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[#24272B] hover:border-b-2 hover:border-green-500 hover:text-green-500 transition duration-150"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="text-[#035f41] border border-[#035f41] px-4 py-1 rounded-md hover:bg-[#035f41] hover:text-white transition"
          >
            Login
          </Link>
          <Link
            href="/sign-up"
            className="text-[#035f41] border border-[#035f41] px-4 py-1 rounded-md hover:bg-[#035f41] hover:text-white transition"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="text-[#24272B]" />
            </SheetTrigger>
            <SheetContent side="right" className="px-6 py-4">
              <SheetHeader>
                <SheetTitle className="text-left text-lg text-green-600">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-[#24272B] hover:text-green-500 transition"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="">
                  <Link
                    href="/login"
                    className="inline-block text-[#035f41] border border-[#035f41] px-4 py-1 rounded-md hover:bg-[#035f41] hover:text-white transition"
                  >
                    Login
                  </Link>
                  <Link
                    href="/sign-up"
                    className="inline-block text-[#035f41] border border-[#035f41] px-4 py-1 rounded-md hover:bg-[#035f41] hover:text-white transition"
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
