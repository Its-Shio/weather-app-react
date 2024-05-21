import React from "react";
import "./Forecast.css";

export default function DefaultImg(props) {
  let img = `https://openweathermap.org/img/wn/${props.icon}@2x.png`;
  return <img className="ForecastImg" src={img} />;
}
