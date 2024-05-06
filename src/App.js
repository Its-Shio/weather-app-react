import "./styles.css";
import React from "react";
import DefaultImg from "./DefaultImg";
import Search from "./Search";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
//
export default function App() {
  return (
    <html lang="en">
      <head>
        <title>Weather App</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous"
        />
        <link href="src/style.css" rel="stylesheet" type="text/css" />
        <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>
      </head>
      <body>
        <div className="container">
          <div className="weather">
            <Search />
            <br />
            <div className="city" id="cityName">
              Pittsburgh PA, United States
            </div>
            <div className="mainText" id="dateTime">
              Thursday 13:00
            </div>
            <DefaultImg />
            <Temperature />
            <Forecast />
          </div>
        </div>
        <p>
          <a href="https://github.com/Its-Shio/weather-app-react">Code</a> by{" "}
          <a href="https://github.com/Its-Shio">Dominica Kelly</a>
        </p>
        <script src="src/index.js"></script>
      </body>
    </html>
  );
}
