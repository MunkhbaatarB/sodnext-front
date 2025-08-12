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
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {benefits.map((item, index) => {
            const IconComponent = icons[index];
            return (
              <motion.div
                key={index}
                className="overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-gray-800"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                }}
              >
                <div className="flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-500 p-6">
                  <IconComponent className="text-5xl text-white" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
