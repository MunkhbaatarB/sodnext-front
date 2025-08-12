"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const imageData = {
  camera: [
    "https://media1.thrillophilia.com/filestore/n2ib9inwzcilxpg3aumbigvq4jus_IMG_World_Dubai_Fun_38a0986c1a.jpg?w=400&dpr=2",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTONvusf0zDT91WJPM7D6rR8ZV0S5gVwCb0XQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjPClvk1Eno3Y5JOM_7muvEOs7gVhaO4Nim0OQNvIaex8fGiKKQWnK7F2aEE4yUiz0-PM&usqp=CAU",
  ],
  network: [
    "/images/network1.jpg",
    "/images/network2.jpg",
    "/images/network3.jpg",
  ],
  device: ["/images/device1.jpg", "/images/device2.jpg", "/images/device3.jpg"],
};

export default function SupportSection() {
  const [active, setActive] = useState<"camera" | "network" | "device">(
    "camera",
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = imageData[active];

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="relative py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4">
        {/* Гарчиг */}
        <h2 className="text-md mb-8 text-center font-bold text-dark dark:text-white md:text-xl">
          ХИЙЖ ГҮЙЦЭТГЭСЭН ТОМООХОН АЖЛУУД
        </h2>

        {/* Товчлуурууд */}
        <div className="mb-10 flex justify-center gap-4">
          {(["camera", "network", "device"] as const).map((type) => (
            <button
              key={type}
              onClick={() => setActive(type)}
              className={`rounded border px-4 py-2 transition ${
                active === type
                  ? "bg-sky-400 text-white"
                  : "border-sky-500  text-dark hover:bg-blue-100 dark:text-white"
              }`}
            >
              {type === "camera"
                ? "Камерын шийдэл"
                : type === "network"
                  ? "Сүлжээний шийдэл"
                  : "Тоног төхөөрөмж"}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {images.map((img, index) => (
            <div
              key={index}
              className="cursor-pointer overflow-hidden rounded shadow"
            >
              <img
                src={img}
                alt={`Gallery ${index}`}
                className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                onClick={() => openModal(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          onClick={closeModal}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
        >
          <div
            className="relative w-full max-w-5xl px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 z-50 text-3xl font-bold text-white hover:text-gray-300"
            >
              &times;
            </button>

            {/* Swiper */}
            <Swiper
              modules={[Navigation, Pagination, Keyboard]}
              navigation
              pagination={{ clickable: true }}
              keyboard
              initialSlide={currentIndex}
              className="rounded-lg"
            >
              {images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt={`Slide ${idx}`}
                    className="mx-auto h-auto max-h-[80vh] w-full rounded-lg object-contain shadow-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </section>
  );
}
