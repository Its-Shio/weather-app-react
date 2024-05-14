import "./styles.css";
import React, { useState } from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <html lang="en">
      <head>
        <title>Weather App</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
        <link href="src/style.css" rel="stylesheet" type="text/css" />
        <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>
      </head>
      <body>
        <div className="container">
          <div className="weather">
            <Weather defaultCity="Rivne" />
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
