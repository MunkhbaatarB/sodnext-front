"use client";

import Spline from "@splinetool/react-spline";
import React, { useEffect, useState } from "react";
import ThemeToggler from "../Header/ThemeToggler";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import WeatherCard from "../weather/weather-card";

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

  return (
    <main className="relative h-screen w-full overflow-hidden">
      <Spline scene={sceneUrl} />

      {/* Баруун талд weather card нэмэх */}
      <div
        className="absolute right-[5%] top-[5%] z-20"
        style={{ width: 280, height: 350 }}
      >
        {/* <WeatherCard /> */}
      </div>

      {/* Center text */}
      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 transform rounded-lg p-4 text-center">
        <h1 className="text-2xl font-bold text-gray-400 drop-shadow-[0_3px_10px_rgba(0,0,0,0.7)] dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Технологи өөд тэмүүл
        </h1>
      </div>
    </main>
  );
};

export default Hero;
