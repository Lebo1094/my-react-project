import React from "react";
import { Rings } from "react-loader-spinner";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import ConvertTempUnit from "./ConvertTempUnit";
import ConvertFeelUnit from "./ConvertFeelUnit";

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
      <br />
      <div className="row">
        <div className="col-4">
          <h5>
            {weatherData.city}
            <br />
            <FormatDate date={weatherData.date} />
          </h5>
        </div>
        <div className="col-4">
          <h5>
            <strong>
              <ConvertTempUnit temp={weatherData.temperature} />
            </strong>
            <br />
            <strong class="text-capitalize">
              {weatherData.description}
            </strong>{" "}
          </h5>
        </div>
        <div className="col-4">
          <WeatherIcon icon={weatherData.description} code={weatherData.icon} />
        </div>
      </div>
      <br />
      <h2>Air Conditions</h2>
      <br />
      <div className="row">
        <div className="col-4">
          <h5>
            Feels like <br />
            <ConvertFeelUnit tempfeel={weatherData.feels_like} />
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
