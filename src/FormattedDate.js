import React from "react";

export default function FormattedDate(props) {
  new Date(props.time);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.time.getDay()];
  let hours = props.time.getHours();
  let minutes = props.time.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  return (
    <div>
      {" "}
      Today, {day} at {hours}:{minutes}
    </div>
  );
}
