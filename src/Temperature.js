import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="temperature">
        <span className="temperatureNum" id="tempNum" value="1">
          {Math.round(props.celsius)}
        </span>
        <span className="units">
          °C |
          <a id="fahrenheit" href="#" onClick={convertFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="temperature">
        <span className="temperatureNum" id="tempNum" value="1">
          {Math.round((props.celsius * 9) / 5 + 32)}
        </span>
        <span className="units">
          <a id="celsius" href="#" onClick={convertCelsius}>
            °C
          </a>{" "}
          |°F
        </span>
      </div>
    );
  }
}
