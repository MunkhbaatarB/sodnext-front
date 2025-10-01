"use client";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Image,
} from "@nextui-org/react";
import { FaCloud, FaRocket, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion"; // npm install framer-motion

const icons = [FaCloud, FaRocket, FaUsers];
const benefits = [
  {
    title: "Алсын хараа",
    description:
      "Бид технологийн дэвшлийг ашиглан нийгэм, хэрэглэгчид, хамтрагчдынхаа амьдралыг хөнгөвчлөхийг зорьдог.",
    image:
      "https://images.squarespace-cdn.com/content/v1/583ed05c59cc68a8c3e45c0f/1482074282081-KQBCRLEWPLWTJKWBCR4X/vision.png?format=750w",
  },
  {
    title: "Бидний зорилго",
    description:
      "Инноваци, найдвартай байдал болон хэрэглэгчийн хэрэгцээнд тулгуурласан шийдлүүдийг санал болгох.",
    image: "/mission.jpg",
  },
  {
    title: "Үнэт зүйлс",
    description:
      "Хариуцлага, итгэлцэл, багаар ажиллах чадвар болон үр дүнд төвлөрсөн үйл ажиллагааг эрхэмлэдэг.",
    image: "/values.jpg",
  },
];

export default function AboutSectionBenefits() {
  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-900 md:py-20 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-gray-700 dark:bg-[#121723]"
            >
              {/* Icon */}
              <div className="mb-6 flex h-[60px] w-[60px] items-center justify-center">
                <svg
                  fill="currentColor"
                  className="text-primary dark:text-white"
                  height="35px"
                  width="35px"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M505.616,238.008c-1.079-1.279-26.946-31.695-70.603-62.481C394.538,146.983,330.624,112.958,256,112.958 ..."></path>
                </svg>
              </div>

              {/* Title */}
              <h3 className="mb-3 text-lg font-bold text-black dark:text-white">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
