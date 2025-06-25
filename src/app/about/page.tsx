import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import SwipSection from "@/components/swiper";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Sod electronics",
  description:
    "Технологийн чиг хандлагад тулгуурлан хэрэглэгчдийн хүсэл зорилгод нийцэж ажиллана",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Бидний тухай"
        description="Технологийн чиг хандлагад тулгуурлан хэрэглэгчдийн хүсэл зорилгод нийцэж ажиллана"
      />
      <AboutSectionOne />
      <SwipSection />
    </>
  );
};

export default AboutPage;
