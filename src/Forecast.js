import React from "react";
import DefaultImg from "./DefaultImg";

export default function Forecast() {
  return (
    <div>
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
}
