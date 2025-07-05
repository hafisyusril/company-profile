"use client";
import React from "react";

const CompanyHistorySection = () => {
  return (
    <section className="w-full bg-[#f4f2ee] text-[#0F172A] px-4 md:px-16 py-24">
      <div className="flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Kiri: Judul Besar */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3D2B1F] leading-tight text-center">
            Our story <br /> at the first place
          </h2>
        </div>

        {/* Kanan: Penjelasan Detail */}
        <div className="w-full md:w-1/2 space-y-6 text-[#4B3A2F] text-lg leading-relaxed">
          <p>
            HORE Coffee was born out of a passion for creating a calm, warm, and
            connected environment through coffee. What began as a small local
            café quickly grew into a beloved place for individuals to unwind and
            reconnect — both with themselves and with others.
          </p>
          <p>
            Founded by a group of friends who believed in mindful living and
            community values, HORE's first store opened in 2019 with a vision to
            blend great coffee with intentional living. Every cup is served not
            just with quality, but with heart.
          </p>
          <p>
            Over the years, HORE has expanded to multiple locations and launched
            its own line of signature blends. From neighborhood hangouts to
            curated online experiences, each milestone reflects our ongoing
            mission: to bring peace and presence to your daily life — one sip at
            a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyHistorySection;
