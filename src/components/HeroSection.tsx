"use client";
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full bg-[#f4f2ee] text-[#0F172A] px-4 md:px-16 py-16">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Gambar kiri */}
        <div className="relative w-full md:w-1/2 h-64 md:h-[450px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/ourstory2-hore.webp"
            alt="HORE Coffee Ambience"
            fill
            className="object-cover"
          />
        </div>

        {/* Konten kanan */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold text-[#3D2B1F]">Welcome to HORE</h1>
          <p className="text-lg text-[#4B3A2F]">
            Discover your daily dose of calm and joy in every cup. At HORE, we
            don&apos;t just serve coffee — we craft moments of peace.
          </p>

          <div className="border-l-4 border-[#035f41] pl-4">
            <h2 className="italic text-2xl font-semibold text-[#035f41] mb-2">
              “Find peace in life with HORE every day.”
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
