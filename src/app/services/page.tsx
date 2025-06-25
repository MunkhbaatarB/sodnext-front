import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import ServicecSection from "@/components/services";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services| Sod electronics",
  description: "This is Services for Startup Nextjs Template",
  // other metadata
};

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Services"
        description="Ямар ч төрлийн бизнес үйлчилгээ нь дижитал орчинд маркетинг борлуулалтын шинэ арга барил техникийг шаарддаг. Дижитал маркетингийн аливаа арга техникийг вэб сайтгүйгээр удирдан явуулах боломжгүй."
      />
      <ServicecSection />
    </>
  );
};

export default ServicesPage;
