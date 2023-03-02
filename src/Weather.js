import React from "react";
import "./Weather.css";

export default function Weather(props) {
  if (props.temperature) {
    return (
      <div className="Weather">
        <h2>Dude, this is your weather:</h2>
        <h1>{props.city}</h1>
        <p>
          <strong>Monday</strong>
        </p>
        <p>21.02.2023 11:00</p>
        <p>
          The Weather Description in {props.city} is{" "}
          <strong>{props.description}</strong>.
        </p>
        <div className="row">
          <div className="col-6">
            {" "}
            The Temperature is{" "}
            <strong>
              {Math.round(props.temperature)}
              °C
            </strong>
            .{" "}
            <img
              src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
              alt={props.description}
            />
          </div>
          <div className="col-6">
            <ul>
              <li> Humidity: {props.humidity}%.</li>
              <li> Wind: {props.wind}km/h.</li>
              <li> Preciptation: {props.wind}km/h.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return <p className="Weather">Loading...</p>;
  }
}
