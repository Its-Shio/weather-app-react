import React from "react";
import FormattedDate from "./FormattedDate";
import DefaultImg from "./DefaultImg";

export default function WeatherInfo(props) {
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
      <div className="temperature">
        <span className="temperatureNum" id="tempNum" value="1">
          {Math.round(props.data.temperature)}
        </span>
        <span className="units">
          <a id="celsius" href="#">
            °C
          </a>{" "}
          |
          <a id="fahrenheit" href="#">
            °F
          </a>
        </span>
      </div>

      <div className="mainText">5-Day Forecast</div>
      <div className="forecast">
        <div className="forecastDay">
          Fri <DefaultImg /> 24° 14°
        </div>
        <div className="forecastDay">
          Sat <DefaultImg /> 25°/13°
        </div>
        <div className="forecastDay">
          Sun <DefaultImg /> 26°/14°
        </div>
        <div className="forecastDay">
          Mon <DefaultImg /> 27°/14°
        </div>
        <div className="forecastDay">
          Tue <DefaultImg /> 28°/14°
        </div>
      </div>
    </span>
  );
}
