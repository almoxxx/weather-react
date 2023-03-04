import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Mon</div>
          <img
            src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.icon}.png`}
            alt={props.description}
          />
          <div className="forecast-temperatures">
            <span className="forecast-maximum">30</span> |{" "}
            <span className="forecast-minimum">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
