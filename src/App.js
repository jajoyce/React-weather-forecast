import React from "react";
import "./styles.css";
import weatherData from "./weatherData";
import WeatherForecast from "./components/WeatherForecast";

console.log("imported weatherData:", weatherData);

export default function App() {
  const forecasts = weatherData.map((elem, index) => {
    return (
      <WeatherForecast
        img={elem.img}
        conditions={elem.conditions}
        time={elem.time}
        key={index}
      />
    );
  });
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <section>{forecasts}</section>
    </div>
  );
}
