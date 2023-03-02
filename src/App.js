import React, { useState } from "react";
import "./App.css";
import Weather from "./Weather";
import axios from "axios";

export default function App() {
  let [city, setCity] = useState(null);
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);
  let [resultCity, setResultCity] = useState(null);
  let [time, setTime] = useState(null);

  function showWeather(response) {
    setTemperature(response.data.temperature.current);
    setDescription(response.data.condition.description);
    setHumidity(response.data.temperature.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.condition.icon);
    setResultCity(response.data.city);
    setTime(new Date(response.data.time * 1000));
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}}&key=b1d355353afe3oe89t1c624ba0cd84bf&units=metric`;
    axios.get(url).then(showWeather);
  }

  return (
    <div className="App container">
      <h1>Weather Search Engine</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a city"
          className="form-control text-white bg-black bg-opacity-50"
          onChange={updateCity}
        />
        <input type="submit" className="button" value="Search" />
      </form>
      <div>
        <h2>Can I join the sunny side?</h2>
        <Weather
          city={resultCity}
          temperature={temperature}
          description={description}
          humidity={humidity}
          wind={wind}
          icon={icon}
          time={time}
        />
      </div>
      <footer>
        This App is{" "}
        <a
          href="https://github.com/almoxxx/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced
        </a>{" "}
        and was coded by{" "}
        <a
          href="https://alena-mohsenyar.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Alena Mohsenyar.
        </a>{" "}
      </footer>
    </div>
  );
}
