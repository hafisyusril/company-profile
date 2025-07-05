'use client'
import Navbar from "@/components/Navbar";
import Image from "next/image";
import AboutUs from "./about-us/page";
import HeroSection from "@/components/HoreSection";
import CompanyOverviewSection from "@/components/CompanyOverviewSection";
import ServiceSection from "@/components/ServiceSection";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <div className="container mx-auto px-4" >
      <HeroSection />
      <CompanyOverviewSection />
      <ServiceSection />
      <TestimonialSection />
    </div>
  );
}
