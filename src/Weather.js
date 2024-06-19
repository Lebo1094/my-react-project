import React from "react";
import { Rings } from "react-loader-spinner";

import "./Weather.css";

export default function Weather({ weatherData }) {
  if (!weatherData.city) {
    return (
      <div className="loading-spinner">
        <Rings
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="rings-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  return (
    <div className="Weather">
      <h2>Current Weather</h2>
      <div className="row">
        <div className="col-4">
          <h5>
            {weatherData.city}
            <br />
            Tuesday 20:30
          </h5>
        </div>
        <div className="col-4">
          <h5>
            <strong>{Math.round(weatherData.temperature)}°C</strong>
            <br />
            <strong class="text-capitalize">
              {weatherData.description}
            </strong>{" "}
          </h5>
        </div>
        <div className="col-4">
          <img src={weatherData.iconUrl} alt="Weather Icon" />
        </div>
      </div>
      <br />
      <h2>Air Conditions</h2>
      <div className="row">
        <div className="col-4">
          <h5>
            Feels like <br /> {Math.round(weatherData.feels_like)}℃
          </h5>
        </div>
        <div className="col-4">
          <h5>
            Humidity <br /> <strong>{weatherData.humidity}%</strong>
          </h5>
        </div>
        <div className="col-4">
          <h5>
            Wind <br /> <strong>{weatherData.wind} km/h</strong>
          </h5>
        </div>
      </div>
    </div>
  );
}
