import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";

export default function WeatherInfo(props) {
  console.log(props.data.date);
  return (
    <span>
      <div className="city" id="cityName">
        {props.data.city}, {props.data.country}
      </div>
      <div className="mainText">
        <span id="dateTime">
          {" "}
          <FormattedDate date={props.data.date} /> {props.data.desc}
        </span>
      </div>
      <div className="mainText">
        <span>
          Humidity:{" "}
          <span className="humidityWindData" id="humidityText">
            {props.data.humidity}%
          </span>
          ,{" "}
        </span>
        <span>
          Wind Speed:{" "}
          <span className="humidityWindData" id="windText">
            {Math.round(props.data.wind)}
          </span>
          <span className="humidityWindData" id="windUnits">
            km/h
          </span>
        </span>
      </div>
      <img className="weatherImg" src={props.data.image}></img>
      <Temperature celsius={props.data.temperature} />

      <div className="mainText">5-Day Forecast</div>
    </span>
  );
}
