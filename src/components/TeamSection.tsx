"use client";
import React from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Brenda Malonda",
    role: "Head Barista",
    image: "/brenda-malonda.webp",
    bio: "Brenda brings passion and precision to every cup, ensuring every brew meets our highest standards.",
  },
  {
    name: "Mouzak Raffen",
    role: "Marketing Lead",
    image: "/mouzak-raffen.webp",
    bio: "With a love for branding and storytelling, Raffen helps bring HOREs message of peace to the world.",
  },
  {
    name: "Puspita Dewi",
    role: "Sustainability Manager",
    image: "/puspita-dewi.webp",
    bio: "Dewi ensures our operations remain environmentally responsible and forward-thinking.",
  },
];

const TeamSection = () => {
  return (
    <section className="w-full bg-[#f4f2ee] text-[#0F172A] px-4 md:px-16 py-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#3D2B1F]">
          Meet Our Team
        </h2>
        <p className="mt-4 text-[#4B3A2F] text-lg">
          The people behind HORE — passionate, kind, and grounded
          in purpose.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition"
          >
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#3D2B1F]">
              {member.name}
            </h3>
            <p className="text-green-700 font-medium">{member.role}</p>
            <p className="text-[#4B3A2F] text-sm mt-2">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
