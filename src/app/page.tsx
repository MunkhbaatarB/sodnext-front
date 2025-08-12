import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import SoftwareSectionOne from "@/components/Software/SoftwareSectionOne";
import SoftwareSectionTwo from "@/components/Software/SoftwareSectionTwo";
import SoftwareSectionThree from "@/components/Software/SoftwareSectionThree";

export const metadata: Metadata = {
  title: "SOD ELECTRONICS",
  description: "Технологи өөд тэмүүл",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      {/* <Video /> */}
      <Features />
      <Brands />
      {/* <SoftwareSectionOne />
      <SoftwareSectionTwo /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}
