import React from "react";
import "./styles.css";
import weatherData from "./weatherData";
import WeatherForecast from "./components/WeatherForecast";

export default function App() {
  const forecasts = weatherData.map((elem, index) => {
    return <WeatherForecast {...elem} key={index} />;
  });
  return (
    <div className="App">
      <h1>Your {Math.ceil(forecasts.length / 2)}-Day Forecast</h1>
      <section>{forecasts}</section>
    </div>
  );
}
