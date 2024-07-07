import React from "react";
import WeatherCard from "../components/WeatherCard";
import WeatherCharts from "../components/WeatherCharts";
import { Searchbar } from "../components/Searchbar";

export const Weather = () => {
  return (
    <div className="max-w-[1200px] min-h-[100vh] h-[100%] w-[100%] border-2 text-white flex flex-col justify-evenly items-center p-2">
      <Searchbar />
      <WeatherCard />
      <WeatherCharts />
    </div>
  );
};
