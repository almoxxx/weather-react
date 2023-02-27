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

  function showWeather(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
    setResultCity(response.data.name);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}
      &appid=200cec8928a5e89f5e5c86277bac3ce1&units=metric`;
    axios.get(url).then(showWeather);
  }

  return (
    <div className="App container">
      <h1>Weather Search Engine</h1>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Type a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <div>
        <Weather
          city={resultCity}
          temperature={temperature}
          description={description}
          humidity={humidity}
          wind={wind}
          icon={icon}
        />
      </div>
      <p>
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
      </p>
    </div>
  );
}
