"use client";
import { useState } from "react";
import {
  FiCloud,
  FiServer,
  FiShield,
  FiSettings,
  FiGlobe,
  FiBox,
  FiUsers,
} from "react-icons/fi";

const services = [
  {
    id: 1,
    title: "Microsoft M365 үйлчилгээ",
    description:
      "Office 365, Teams, OneDrive зэрэг үүлэн дээр суурилсан шийдлүүд.",
    icon: <FiGlobe size={28} />,
  },
  {
    id: 2,
    title: "Мэдээллийн технологийн аутсорсинг",
    description: "Таны IT системийн дэмжлэг, удирдлагыг бид гүйцэтгэнэ.",
    icon: <FiUsers size={28} />,
  },
  {
    id: 3,
    title: "Байгууллагын домэйн сүлжээ",
    description: "Дотоод болон гадаад сүлжээний шийдэл, аюулгүй байдал.",
    icon: <FiSettings size={28} />,
  },
  {
    id: 4,
    title: "CLOUD-д суурилсан мэдээлэл",
    description: "Cloud сервер, хадгалалт, нөөцлөлтийн шийдэл.",
    icon: <FiCloud size={28} />,
  },
  {
    id: 5,
    title: "Мэдээллийн аюулгүй байдлын цогц систем",
    description: "Firewall, IDS/IPS, endpoint хамгаалалт.",
    icon: <FiShield size={28} />,
  },
  {
    id: 6,
    title: "Сервер болон хадгалах систем",
    description: "Өндөр хурдтай, найдвартай серверийн шийдлүүд.",
    icon: <FiServer size={28} />,
  },
  {
    id: 7,
    title: "Серверийн техникийн ерөнхий шийдэл",
    description: "Тоног төхөөрөмжийн суурилуулалт, засвар үйлчилгээ.",
    icon: <FiBox size={28} />,
  },
];

export default function ServicesSection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className=" py-12 transition-colors duration-300 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-2xl font-semibold text-gray-800 dark:text-gray-100 md:text-3xl">
          Бидний үйлчилгээ
        </h2>

        <div className="relative">
          {/* Голд сонгогдсон service */}
          {/* {selected && (
            <div className="absolute left-1/2 top-1/2 z-10 w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 text-center shadow-lg transition-all duration-300 dark:bg-gray-800">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full  text-white">
                {services.find((s) => s.id === selected)?.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                {services.find((s) => s.id === selected)?.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {services.find((s) => s.id === selected)?.description}
              </p>
            </div>
          )} */}

          {/* Services Grid */}
          <div className="grid grid-cols-2 justify-center gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelected(s.id)}
                className="group flex flex-col items-center text-center focus:outline-none"
              >
                <div
                  className={`flex transform items-center justify-center rounded-full bg-white shadow-md transition-transform duration-200 group-hover:scale-105 dark:bg-gray-700 ${
                    selected === s.id
                      ? "ring-4 ring-blue-400 dark:ring-blue-500"
                      : ""
                  }`}
                  style={{ width: 88, height: 88 }}
                >
                  <div className="text-2xl text-gray-700 dark:text-gray-200">
                    {s.icon}
                  </div>
                </div>
                <span className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-200 md:text-base">
                  {s.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
