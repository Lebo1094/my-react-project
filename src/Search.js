import React, { useState } from "react";
import Weather from "./Weather";
import axios from "axios";

import "./Search.css";

export default function Search() {
  const [city, setCity] = useState(null);
  const [data, setData] = useState({});

  function showTempData(response) {
    setData({
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      feels_like: response.data.main.feels_like,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
    });
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function getWeatherData(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2718952144ed077c12e7c160fb6fc351&units=metric`;
    axios.get(apiUrl).then(showTempData);
  }

  return (
    <div className="Search">
      <h1>Weather Today</h1>
      <form onSubmit={getWeatherData}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a City"
              autoFocus
              onChange={updateCity}
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <Weather weatherData={data} />
    </div>
  );
}
