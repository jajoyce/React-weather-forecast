import React from "react";

const WeatherIcon = ({ img, alt }) => {
  return <img src={img} alt={alt + " Weather Icon"} />;
};

export default WeatherIcon;
