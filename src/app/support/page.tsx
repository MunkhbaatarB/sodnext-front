import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import SupportSection from "@/components/Support";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support| Sod electronics",
  description:
    "Технологийн чиг хандлагад тулгуурлан хэрэглэгчдийн хүсэл зорилгод нийцэж ажиллана",
  // other metadata
};

const SupportPage = () => {
  return (
    <>
      <Breadcrumb pageName="Support" description="Бид Ажлын цагаар" />
      <SupportSection />
    </>
  );
};

export default SupportPage;
