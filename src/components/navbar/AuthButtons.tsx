"use client";

import Link from "next/link";
import { useAuthStore } from "@/store/auth";
import { Button } from "@/components/ui/button";

const AuthButtons = () => {
  const { user, clearAuth } = useAuthStore();

  if (user) {
    return (
      <Button variant="destructive" onClick={clearAuth} className="px-4 py-1">
        Logout
      </Button>
    );
  }

  return (
    <>
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
    </>
  );
};

export default AuthButtons;
