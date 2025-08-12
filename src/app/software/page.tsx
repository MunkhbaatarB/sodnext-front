import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import SoftwareSectionThree from "@/components/Software/SoftwareSectionThree";

import { Metadata } from "next";
import SoftwareSectionOne from "@/components/Software/SoftwareSectionOne";

export const metadata: Metadata = {
  title: "Software | Sod electronics",
  description: "This is Software for Startup Nextjs Template",
  // other metadata
};

const SoftwarePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Software"
        description="Ямар ч төрлийн бизнес үйлчилгээ нь дижитал орчинд маркетинг борлуулалтын шинэ арга барил техникийг шаарддаг. Дижитал маркетингийн аливаа арга техникийг вэб сайтгүйгээр удирдан явуулах боломжгүй."
      />
      <SoftwareSectionOne />
      <AboutSectionTwo />
      <SoftwareSectionThree />
    </>
  );
};

export default SoftwarePage;
