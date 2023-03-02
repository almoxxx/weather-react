import React from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  if (props.temperature) {
    return (
      <div className="Weather">
        <h2>Dude, this is your weather:</h2>
        <h1>{props.city}</h1>
        <FormattedDate time={props.time.getDay()} />
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
              src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.icon}.png`}
              alt={props.description}
            />
          </div>
          <div className="col-6">
            <ul>
              <li> Humidity: {props.humidity}%.</li>
              <li> Wind: {props.wind}km/h.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return <p className="Weather">Loading...</p>;
  }
}
