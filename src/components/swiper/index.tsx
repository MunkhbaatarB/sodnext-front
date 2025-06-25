"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import swiperData from "./data";

const SwipSection = () => {
  return (
    <section className="bg-gray-100 py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <h2 className="mb-10 text-center text-3xl font-bold">Our Journey</h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {swiperData.map((item, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center">
              <div className="relative h-64 w-64">
                <Image
                  src={item.picurl}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{item.year}</h3>
              <p className="text-gray-600">{item.title}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SwipSection;
