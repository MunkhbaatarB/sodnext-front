"use client";

import Spline from "@splinetool/react-spline";
import React, { useEffect, useState } from "react";
import ThemeToggler from "../Header/ThemeToggler";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

const Hero = () => {
  const { theme } = useTheme();
  const [sceneUrl, setSceneUrl] = useState(
    "https://prod.spline.design/cdJLSJ9iu8VRlmcv/scene.splinecode",
  );
  const router = useRouter();

  useEffect(() => {
    setSceneUrl(
      theme === "light"
        ? "https://prod.spline.design/cdJLSJ9iu8VRlmcv/scene.splinecode"
        : "https://prod.spline.design/4aazVT9HGpjhUyu8/scene.splinecode",
    );
  }, [theme]);

  const leftBubbles = [
    { top: "20%", text: "Үндсэн хэсэг 1", link: "/Jobs" },
    { top: "40%", text: "Үндсэн хэсэг 2", link: "/main-section-2" },
    { top: "60%", text: "Үндсэн хэсэг 3", link: "/main-section-3" },
  ];

  const rightBubbles = [
    { top: "25%", text: "Дэд хэсэг 1", link: "/sub-section-1" },
    { top: "45%", text: "Дэд хэсэг 2", link: "/sub-section-2" },
    { top: "65%", text: "Дэд хэсэг 3", link: "/sub-section-3" },
  ];

  return (
    <main className="relative h-screen w-full overflow-hidden">
      <Spline scene={sceneUrl} />

      {/* Left Bubbles */}
      {leftBubbles.map((bubble, index) => (
        <div
          key={`left-${index}`}
          className="absolute left-[5%] z-10 cursor-pointer"
          style={{ top: bubble.top }}
          onClick={() => router.push(bubble.link)}
        >
          <div className="relative rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-red-500 shadow-lg transition hover:bg-gray-100">
            <p>{bubble.text}</p>
            <div className="absolute left-full top-1/2 h-0 w-0 -translate-y-1/2 border-b-[6px] border-l-[8px] border-t-[6px] border-b-transparent border-l-white border-t-transparent"></div>
          </div>
        </div>
      ))}

      {/* Right Bubbles */}
      {rightBubbles.map((bubble, index) => (
        <div
          key={`right-${index}`}
          className="absolute right-[5%] z-10 cursor-pointer"
          style={{ top: bubble.top }}
          onClick={() => router.push(bubble.link)}
        >
          <div className="relative rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-red-500 shadow-lg transition hover:bg-gray-100">
            <p>{bubble.text}</p>
            <div className="absolute right-full top-1/2 h-0 w-0 -translate-y-1/2 border-b-[6px] border-r-[8px] border-t-[6px] border-b-transparent border-r-white border-t-transparent"></div>
          </div>
        </div>
      ))}

      {/* Center text */}
      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 transform rounded-lg bg-blue-400/40 p-4 text-center text-white dark:text-white">
        <h1 className="text-xl sm:text-2xl lg:text-3xl">Сайн байна уу?</h1>
        <p className="mt-2 text-sm sm:text-base lg:text-lg">
          Таньд энэ өдрийн мэнд хүргье Сод элекроникс компанийн веб хуудсанд
          тавтай морил
        </p>
      </div>
    </main>
  );
};

export default Hero;
