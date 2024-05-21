import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./styles.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

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
      coordinates: response.data.coord,
      wind: response.data.wind,
      city: response.data.name,
      country: response.data.sys.country,
      image: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      desc: tempDesc,
    });
  }

  function search() {
    const apiKey = "25fad9f7e87157d33dde0f82ab269ee8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  function clickCurrent(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(setCurrent);
  }

  function setCurrent(position) {
    const apiKey = "25fad9f7e87157d33dde0f82ab269ee8";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="cityInput"
            placeholder="Enter a city"
            onChange={updateCity}
          />
          <input
            className="submitBtn"
            type="submit"
            value="Search"
            id="btnSubmit"
          />
        </form>
        <button className="currentBtn" id="btnCurrent" onClick={clickCurrent}>
          Current
        </button>
        <br />
        <WeatherInfo data={weatherData} />
        <div className="forecast">
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
