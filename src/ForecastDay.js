import React from "react";
import DisplayImg from "./DisplayImg";
import "./Forecast.css";
import ForecastFormatDate from "./ForecastFormatDate";

export default function ForecastDay(props) {
  let date = new Date(props.data.dt * 1000);
  return (
    <div className="WeatherForecast">
      <ForecastFormatDate date={date} />
      <DisplayImg icon={props.data.weather[0].icon} />
      <span className="max">{Math.round(props.data.temp.max)}°</span>
      <span className="min">{Math.round(props.data.temp.min)}°</span>
    </div>
  );
}
