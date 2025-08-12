"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { parseStringPromise } from "xml2js";

const WeatherCard = () => {
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios.get("https://weather.gov.mn/api/get/forecasts");
        const result = await parseStringPromise(res.data);

        console.log("XML parsed result:", result);

        const allData = result.forecast.city;
        const ubData = allData.find((c: any) => c.name[0] === "Улаанбаатар");

        console.log("UB data", ubData);

        if (ubData) {
          const today = ubData.data[0].weather[0];
          setWeather({
            date: today.date[0],
            dayTemp: today.temperatureDay[0],
            nightTemp: today.temperatureNight[0],
            phenoDay: today.phenoDay[0],
            phenoNight: today.phenoNight[0],
            windDay: today.windDay[0],
            windNight: today.windNight[0],
          });
        }
      } catch (err) {
        console.error("Цаг агаар татаж чадсангүй:", err);
      }
    };

    fetchWeather();
  }, []);

  if (!weather) return <div>Уншиж байна...</div>;

  return (
    <div className="absolute right-5 top-5 z-50 w-[300px] rounded-xl bg-blue-500 p-4 text-white shadow-xl">
      <h2 className="text-xl font-bold">Улаанбаатар</h2>
      <p>{weather.date}</p>
      <p>Өдрийн хэм: {weather.dayTemp}°C</p>
      <p>Шөнийн хэм: {weather.nightTemp}°C</p>
      <p>Өдрийн төлөв: {weather.phenoDay}</p>
      <p>Шөнийн төлөв: {weather.phenoNight}</p>
      <p>Салхи өдөр: {weather.windDay} м/с</p>
      <p>Салхи шөнө: {weather.windNight} м/с</p>
    </div>
  );
};

export default WeatherCard;
