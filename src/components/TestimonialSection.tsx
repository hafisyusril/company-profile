"use client";
import React from "react";
import Image from "next/image";

const TestimonialSection = () => {
  return (
    <section className="w-full bg-[#f4f2ee] text-[#0F172A] px-4 md:px-16 py-24">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Kiri: Foto + Nama + Jabatan */}
        <div className="flex flex-col items-center">
          <div className="relative w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
            <Image
              src="/megawati-soekarnoputri.webp" // Ganti sesuai nama file fotomu
              alt="Customer Testimonial"
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-4 text-center">
            <p className="text-[#0F172A] font-semibold text-lg">Dewi Kartika</p>
            <p className="text-[#4B3A2F] text-sm">Political Analyst</p>
          </div>
        </div>

        {/* Kanan: Isi Testimoni */}
        <div className="w-full md:w-2/3 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3D2B1F]">
            Our Customer Says
          </h2>
          <p className="text-lg text-[#4B3A2F] leading-relaxed italic">
            “HORE brings me peace from the chaos of my work in politics.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
