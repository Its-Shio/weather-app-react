import React, { useState } from "react";
import DefaultImg from "./DefaultImg";
import "./styles.css";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    let tempDesc = response.data.weather[0].description;
    tempDesc = tempDesc
      .toLowerCase()
      .split(" ")
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ");

    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind,
      city: response.data.name,
      country: response.data.country,
      image: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: "Tuesday 12:30",
      desc: tempDesc,
    });
  }

  if (weatherData.ready) {
    return (
      <div>
        <form>
          <input type="text" id="cityInput" placeholder="Enter a city" />
          <input
            className="submitBtn"
            type="submit"
            value="Search"
            id="btnSubmit"
          />
        </form>
        <button className="currentBtn" id="btnCurrent">
          Current
        </button>
        <br />
        <div className="city" id="cityName">
          {weatherData.city}, {weatherData.country}
        </div>
        <div className="mainText">
          <span id="dateTime"> {weatherData.date}, </span>
          <span id="weatherType">{weatherData.desc}</span>
        </div>
        <div class="mainText">
          <span>
            Humidity:{" "}
            <span class="humidityWindData" id="humidityText">
              {weatherData.humidity}%
            </span>
            ,{" "}
          </span>
          <span>
            Wind Speed:{" "}
            <span class="humidityWindData" id="windText">
              {Math.round(weatherData.wind)}
            </span>
            <span class="humidityWindData" id="windUnits">
              km/h
            </span>
          </span>
        </div>
        <img class="weatherImg" src={weatherData.image}></img>
        <div className="temperature">
          <span className="temperatureNum" id="tempNum" value="1">
            {Math.round(weatherData.temperature)}
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
      </div>
    );
  } else {
    const apiKey = "25fad9f7e87157d33dde0f82ab269ee8";
    let city = "Rivne";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
