import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormatDate from "./FormatDate";

import "./WeatherForecast.css";

export default function WeatherForecast({ forecastData }) {
  if (!forecastData || forecastData.length === 0) {
    return <div className="WeatherForecast">No forecast data available</div>;
  }
  return (
    <div className="WeatherForecast">
      <ul>
        {forecastData.map(function (dayData, index) {
          if (index < 6) {
            console.log(dayData);
            return (
              <li key={index}>
                <div>
                  <FormatDate date={new Date(dayData.dt * 1000)} />
                </div>
                <div className="row">
                  <span className="weather-icon col-4">
                    <WeatherIcon icon={dayData.weather[0].icon} size={18} />
                  </span>
                  <br />
                  <span className="max-temp col-4">
                    {" "}
                    {Math.round(dayData.temp.max)}°
                  </span>{" "}
                  <span className="max-temp col-4">
                    {" "}
                    {Math.round(dayData.temp.min)}°
                  </span>
                </div>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
}
