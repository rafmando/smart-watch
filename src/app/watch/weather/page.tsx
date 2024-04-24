"use client";
import { chakrapetchy } from "@/app/ui/fonts";
import { FaCloudShowersHeavy } from "react-icons/fa";
import { fetchCurrentWeather } from "./api/api";
import React, { useState, useEffect } from "react";
import { useStore } from "zustand";
import { useWeatherStore } from "./../../store";
import Menu from "@/app/ui/menu/menu";

export default function Page() {
  const [data, setData]: any = useState({});
  const { getWeatherResult, weatherData }: any = useWeatherStore();
  // make sure you destructure bellow
  const timezone = weatherData?.timezone;
  const humidity = weatherData?.current?.humidity;
  const windSpeed = weatherData?.current?.wind.speed;
  const feelsLike = weatherData?.current?.feels_like;
  const temperatureRounded = Math.round(weatherData?.current?.temperature);

  useEffect(() => {
    // fetchCurrentWeatherResults()
    getWeatherResult("51.5072", "0.1276");
    console.log("weatherData", weatherData.current);
  }, []);
  return (
    <div className="weather-celcius-container">
      {/* <Menu/> */}
      <h1>{timezone}</h1>
      <div className="weather-celcius">
        <FaCloudShowersHeavy />
        <p>
          {temperatureRounded} <sup className={chakrapetchy.className}>o</sup>
        </p>
      </div>
      <div className="weather-feels-like">
        Feels Like {feelsLike} <sup className={chakrapetchy.className}>o</sup>
      </div>
      <div>HUMIDITY : {humidity}</div>
      <div>WIND SPEED : {windSpeed} mph</div>
    </div>
  );
}
