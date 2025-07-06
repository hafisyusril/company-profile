"use client";

import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavLinks from "./NavLinks";
import AuthButtons from "./AuthButtons";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-[#24272B]" />
      </SheetTrigger>
      <SheetContent side="right" className="px-6 py-4">
        <SheetHeader>
          <SheetTitle className="text-left text-lg text-green-600">Menu</SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-4">
          <NavLinks />
          <div className="flex flex-col gap-2">
            <AuthButtons />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
