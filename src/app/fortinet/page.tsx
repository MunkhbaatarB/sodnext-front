import AboutSectionOne from "@/components/service/Suljee";
import AboutSectionTwo from "@/components/service/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import Suljee from "@/components/service/Suljee";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Сүлжээний аюулгүй байдал  | Sod electronics",
  description:
    "Байгууллагын гадаад болон дотоод сүлжээний аюулгүй байдлыг хангах, дэлхийн шилдэг брэндүүдийн дэвшилтэт технологи, үйлчилгээний шийдлийг үзүүлэн ажиллах",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Сүлжээний аюулгүй байдлын шийдэл, үйлчилгээ"
        description="Байгууллагын гадаад болон дотоод сүлжээний аюулгүй байдлыг хангах, дэлхийн шилдэг брэндүүдийн дэвшилтэт технологи, үйлчилгээний шийдлийг үзүүлэн ажиллах"
      />
      <Suljee />
    </>
  );
};

export default AboutPage;
