import React from "react";

export default function ForecastDate(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[props.date.getDay()];
  return <span>{day}</span>;
}
