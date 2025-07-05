'use client'
import CompanyOverviewSection from "@/components/CompanyOverviewSection";
import HeroSection from "@/components/HeroSection";
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
