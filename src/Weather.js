import React from "react";

export default function Weather(props) {
  if (props.temperature) {
    return (
      <ul>
        <li>
          {" "}
          The Temperature in {props.city} is {Math.round(props.temperature)}°C.
        </li>
        <li>
          {" "}
          The Weather Description in {props.city} is {props.description}.
        </li>
        <li>
          {" "}
          The Humidity in {props.city} is {props.humidity}%.
        </li>
        <li>
          {" "}
          The Wind in {props.city} is {props.wind}km/h.
        </li>
        <li>
          {" "}
          The Weather Icon in {props.city} is{" "}
          <img
            src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
            alt={props.description}
          />
        </li>
      </ul>
    );
  } else {
    return <p>Loading...</p>;
  }
}
