"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type User = {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  login: {
    uuid: string;
  };
};

const roles = [
  "Founder & CEO",
  "Head of Coffee Quality",
  "Customer Experience Manager",
  "Brand Strategist",
  "Sustainability Officer",
  "Barista Lead",
];

const bios = [
  "Passionate about people and coffee, bringing vision into every detail.",
  "Ensures each cup meets our golden standards of flavor and quality.",
  "Building connections through consistent and heartfelt service.",
  "Tells HORE’s story in every branding touchpoint.",
  "Drives our eco-friendly initiatives with clarity and impact.",
  "Leads the baristas with skill, speed, and a lot of heart.",
];

const TeamsPage = () => {
  const [team, setTeam] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=6")
      .then((res) => res.json())
      .then((data) => {
        setTeam(data.results);
      });
  }, []);

  return (
    <section className="w-full bg-[#f4f2ee] text-[#0F172A] px-4 md:px-16 py-24">
      <h2 className="text-4xl font-bold text-center text-[#3D2B1F] mb-12">
        Meet Our Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {team.map((member, idx) => (
          <div
            key={member.login.uuid}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-[1.02] transition-transform duration-200"
          >
            <div className="relative w-full h-64">
              <Image
                src={member.picture.large}
                alt={`${member.name.first} ${member.name.last}`}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center space-y-1">
              <h3 className="text-xl font-semibold text-[#3D2B1F]">
                {member.name.first} {member.name.last}
              </h3>
              <p className="text-green-600 text-sm">{roles[idx % roles.length]}</p>
              <p className="text-[#4B3A2F] text-sm italic">{bios[idx % bios.length]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamsPage;
