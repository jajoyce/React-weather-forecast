import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherData from "./WeatherData";

const WeatherForecast = ({ img, conditions, time }) => {
  return (
    <div className="weather">
      <WeatherIcon img={img} alt={conditions} />
      <WeatherData conditions={conditions} time={time} />
    </div>
  );
};

export default WeatherForecast;
