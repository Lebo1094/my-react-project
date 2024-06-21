import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <ul>
        <li>
          <div className="day">Friday</div>{" "}
          <div className="row">
            <span className="weather-icon col-8">
              <WeatherIcon icon={props.code} size={30} />
            </span>{" "}
            <span className="max-temp col-2"> 19°</span>{" "}
            <span className="min-temp col-2">10°</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
