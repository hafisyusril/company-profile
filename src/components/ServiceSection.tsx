"use client";
import React from "react";
import Link from "next/link";

const ServiceSection = () => {
  return (
    <section className="w-full bg-[#f4f2ee] text-[#0F172A] px-4 md:px-16 py-24">
      <div className="flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Kiri: Judul Besar */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3D2B1F] leading-tight text-center">
            What we craft <br /> for your daily delight
          </h2>
        </div>

        {/* Kanan: Penjelasan Ringkas */}
        <div className="w-full md:w-1/2 space-y-6 text-[#4B3A2F] text-lg leading-relaxed">
          <p>
            HORE offers thoughtfully crafted coffee, homemade pastries, and a cozy space that invites calm and connection — turning your everyday routine into something meaningful and enjoyable.
          </p>
          <div>
            <Link
              href="/products"
              className="inline-block mt-2 px-6 py-2 text-green-600 border border-green-600 rounded hover:bg-green-600 hover:text-[#f4f2ee] transition"
            >
              Explore Our Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
