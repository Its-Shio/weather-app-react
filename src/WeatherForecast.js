import React, { useState, useEffect } from "react";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  let date;

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  if (loaded) {
    date = new Date(forecast[0].dt * 1000);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <ForecastDay data={forecast[0]} />
          </div>
          <div className="col">
            <ForecastDay data={forecast[1]} />
          </div>
          <div className="col">
            <ForecastDay data={forecast[2]} />
          </div>
          <div className="col">
            <ForecastDay data={forecast[3]} />
          </div>
          <div className="col">
            <ForecastDay data={forecast[4]} />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "25fad9f7e87157d33dde0f82ab269ee8";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
