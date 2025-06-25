"use client"; // Mark as a Client Component

import Spline from "@splinetool/react-spline";
import React, { useEffect, useState } from "react";
import ThemeToggler from "../Header/ThemeToggler";
import { useTheme } from "next-themes";

const Hero = () => {
  const { theme, setTheme } = useTheme(); // Access theme context
  const [sceneUrl, setSceneUrl] = useState(
    "https://prod.spline.design/cdJLSJ9iu8VRlmcv/scene.splinecode", // Default light scene
  );

  useEffect(() => {
    // Update the scene URL when the theme changes
    if (theme === "light") {
      setSceneUrl(
        "https://prod.spline.design/cdJLSJ9iu8VRlmcv/scene.splinecode",
      );
    } else if (theme === "dark") {
      setSceneUrl(
        "https://prod.spline.design/4aazVT9HGpjhUyu8/scene.splinecode",
      );
    }
  }, [theme]);

  return (
    <main className="relative h-screen w-full">
      {/* Spline Scene */}
      <Spline scene={sceneUrl} />

      {/* Centered text block */}
      {/* <div
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 transform 
          rounded-lg bg-blue-400/40 p-4 text-center text-white dark:text-white"
      >
        <h1 className="text-xl sm:text-2xl lg:text-3xl">Сайн байна уу?</h1>
        <p className="mt-2 text-sm sm:text-base lg:text-lg">
          Таньд энэ өдрийн мэнд хүргье Сод элекроникс компанийн веб хуудсанд
          тавтай морил
        </p>
      </div> */}

      {/* Theme Toggler */}
    </main>
  );
};

export default Hero;
