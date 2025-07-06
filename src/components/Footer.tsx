"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#f7fafa] text-[#24272B] px-4 md:px-16 py-12 mt-24">
      <div className="grid md:grid-cols-3 gap-10">
        {/* Logo */}
        <div className="flex flex-col items-start gap-4">
          <Image
            src="/hore.avif"
            alt="Hore Coffee Logo"
            width={50}
            height={50}
            className="rounded"
          />
          <p className="text-sm text-[#4B3A2F]">Hore Coffee</p>
        </div>

        {/* Customer Center */}
        <div className="text-sm leading-relaxed space-y-2">
          <h4 className="font-semibold text-base">Customer Center</h4>
          <p>Gedung Graha Ganesha<br />
            Lantai 1 Suite 120 & 130</p>
          <p>Jl. Hayam Wuruk No. 28, Kelurahan Kebon Klapa,<br />
            Kecamatan Gambir, Jakarta Pusat, DKI Jakarta</p>
          <p>📞 0812-3456-7890</p>
        </div>

        {/* Consumer Complaints */}
        <div className="text-sm leading-relaxed space-y-2">
          <h4 className="font-semibold text-base">Consumer Complaints Service</h4>
          <p>Directorate General of Consumer Protection and Trade Compliance,<br />
            Ministry of Trade of the Republic of Indonesia</p>
          <p>WhatsApp Ditjen PKTN: 0812-3456-7890</p>
        </div>
      </div>

      {/* Social Media */}
      <div className="flex justify-end mt-10 space-x-4 text-[#3D2B1F]">
        <Link href="#" aria-label="X (Twitter)">
          <FaXTwitter className="text-2xl hover:text-green-600 transition" />
        </Link>
        <Link href="#" aria-label="Instagram">
          <FaInstagram className="text-2xl hover:text-green-600 transition" />
        </Link>
        <Link href="#" aria-label="YouTube">
          <FaYoutube className="text-2xl hover:text-green-600 transition" />
        </Link>
        <Link href="#" aria-label="LinkedIn">
          <FaLinkedin className="text-2xl hover:text-green-600 transition" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
