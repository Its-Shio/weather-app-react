import React from "react";

export default function Temperature() {
  return (
    <div className="temperature">
      <span className="temperatureNum" id="tempNum" value="1">
        21
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
  );
}
