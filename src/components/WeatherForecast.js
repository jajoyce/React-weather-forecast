import React from "react";

const WeatherForecast = (props) => {
  return (
    <div className="weather">
      <img src={props.img} alt="Weather icon" />
      <p>
        <span>Conditions:</span> {props.conditions}
      </p>
      <p>
        <span>Time:</span> {props.time}
      </p>
    </div>
  );
};

export default WeatherForecast;
