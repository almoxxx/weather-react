import React from "react";
import "./Forecast.css";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="forecastDay">
      <div className="forecast-day">{day()}</div>
      <img
        src={props.data.condition.icon_url}
        alt={props.data.condition.description}
      />
      <div className="forecast-temperatures">
        <span className="forecast-maximum">
          {Math.round(props.data.temperature.maximum)}
        </span>{" "}
        |{" "}
        <span className="forecast-minimum">
          {Math.round(props.data.temperature.minimum)}
        </span>
      </div>
    </div>
  );
}
