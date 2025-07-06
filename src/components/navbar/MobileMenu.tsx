"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import AuthButtons from "./AuthButtons";
import NavLinks from "./NavLinks";

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
        <div className="flex flex-col gap-4">
          <NavLinks />
          <div className="flex flex-col gap-4">
            <AuthButtons />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
