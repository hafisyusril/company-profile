import Navbar from "@/components/Navbar";
import Image from "next/image";
import AboutUs from "./about-us/page";

export default function Home() {
  return (
    <div >
      <Navbar />
      <AboutUs />
    </div>
  );
}
