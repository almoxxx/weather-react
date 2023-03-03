import React, { useState } from "react";

export default function WeatherUnit(props) {
  const [unit, setUnit] = useState("celsius");
  function ConvertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function ConvertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <span className="weatherunit">
        {" "}
        The Temperature is {Math.round(props.celsius)}
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={ConvertToFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = props.celsius * 1.8 + 32;
    return (
      <span className="weatherunit">
        {" "}
        The Temperature is {Math.round(fahrenheit)}
        <span className="unit">
          <a href="/" onClick={ConvertToCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
