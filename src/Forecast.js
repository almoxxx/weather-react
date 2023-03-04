import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastdata, setForecastdata] = useState(null);

  function handleResponse(response) {
    setForecastdata(response.data);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecastdata);
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
            <ForecastDay data={forecastdata[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=b1d355353afe3oe89t1c624ba0cd84bf&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
}
