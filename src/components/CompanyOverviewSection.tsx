"use client";
import React from "react";

const CompanyOverviewSection = () => {
  return (
    <section className="w-full bg-[#f4f2ee] text-[#0F172A] px-4 md:px-16 py-24">
      <div className="flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Judul */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3D2B1F] leading-tight text-center">
            How we uncover <br /> our new story
          </h2>
        </div>

        {/* Penjelasan */}
        <div className="w-full md:w-1/2 space-y-6 text-[#4B3A2F] text-lg leading-relaxed">
          <p>
            Founded with a passion for coffee and community, HORE has grown into more than just a coffee shop. We started from a small corner café with a vision to bring calmness and connection through every cup.
          </p>
          <p>
            Our team is made up of passionate baristas, creative minds, and dedicated service professionals who work together to create a welcoming environment for everyone.
          </p>
          <p>
            At the heart of our culture is authenticity, warmth, and a strong belief in mindful living. We believe a great cup of coffee can be the beginning of a meaningful connection — with others or even with yourself.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverviewSection;
