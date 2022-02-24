import React from "react";

const WeatherData = ({ conditions, time }) => {
  return (
    <div>
      <p>
        <em>Conditions:</em> <br />
        <span>{conditions}</span>
      </p>
      <p>
        <em>Time:</em> <span>{time}</span>
      </p>
    </div>
  );
};

export default WeatherData;
