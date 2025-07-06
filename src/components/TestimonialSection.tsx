"use client";
import React from "react";
import Image from "next/image";

type Testimoni = {
  name: string;
  image: string;
  title: string;
  message: string;
};

const testimonials: Testimoni[] = [
  {
    name: "Megawati",
    image: "/megawati-soekarnoputri.webp",
    title: "Political Analyst",
    message: "HORE brings me peace from the chaos of my work in politics.",
  },
  {
    name: "Susi Pudjiastuti",
    image: "/susi-pudjiastuti.webp",
    title: "Marine Advocate",
    message: "Ngopi di HORE bikin saya merasa seperti di tengah laut — tenang!",
  },
  {
    name: "Dilan",
    image: "/dilan.webp",
    title: "Poet & Biker",
    message: "HORE bukan sekadar kopi, ini rasa rindu yang diseduh.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="w-full bg-[#f4f2ee] text-[#0F172A] px-4 md:px-16 py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#3D2B1F] mb-16">
        What Our Customers Say
      </h2>

      <div className="grid md:grid-cols-3 gap-12">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-md">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-[#0F172A] font-semibold text-lg">{item.name}</p>
              <p className="text-[#4B3A2F] text-sm">{item.title}</p>
            </div>
            <p className="italic text-[#4B3A2F] text-sm md:text-base max-w-xs">
              “{item.message}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
