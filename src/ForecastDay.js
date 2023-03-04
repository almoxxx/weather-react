import React from "react";

export default function ForecastDay(props) {
  function day(props) {
    let date = new Date(props.daily.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="forecastDay">
      <div className="forecast-day">{day()}</div>
      <img
        src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.daily.condition.icon}`}
        alt={props.daily.condition.description}
      />
      <div className="forecast-temperatures">
        <span className="forecast-maximum">
          {Math.round(props.daily.temperature.maximum)}
        </span>{" "}
        |{" "}
        <span className="forecast-minimum">
          {Math.round(props.daily.temperature.minimum)}
        </span>
      </div>
    </div>
  );
}
