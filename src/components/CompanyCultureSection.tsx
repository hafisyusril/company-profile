"use client";
import React from "react";

const CompanyCultureSection = () => {
  return (
    <section className="w-full bg-[#f4f2ee] text-[#0F172A] px-4 md:px-16 py-24">
      <div className="flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Kiri: Penjelasan nilai */}
        <div className="w-full md:w-1/2 space-y-6 text-[#4B3A2F] text-lg leading-relaxed">
          <p>
            At HORE, we embrace <strong>Peacefulness</strong> as a core principle — creating a calm atmosphere where both our customers and team feel at ease. We uphold <strong>Equality</strong> in every interaction, ensuring mutual respect regardless of background or role. And with <strong>Sustainability</strong> at heart, we continuously strive to reduce our environmental impact, crafting a future that benefits everyone.
          </p>
        </div>

        {/* Kanan: Judul */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3D2B1F] leading-tight text-center md:text-right">
            What we Value
          </h2>
        </div>
      </div>
    </section>
  );
};

export default CompanyCultureSection;
