import React from "react";

import "./Weather.css";

export default function Weather({ weatherData }) {
  return (
    <div className="Weather">
      <h2>Current Weather</h2>
      <div className="row">
        <div className="col-5">
          <h5>
            city
            <br />
            Tuesday 20:30
          </h5>
        </div>
        <div className="col-4">
          <h5>
            <strong>temperature°C</strong>
            <br />
            <strong>description</strong>{" "}
          </h5>
        </div>
        <div className="col-3">icon</div>
      </div>
      <br />
      <h2>Air Conditions</h2>
      <div className="row">
        <div className="col-4">
          <h5>
            Humidity <br /> <strong>humidity%</strong>
          </h5>
        </div>
        <div className="col-4">
          <h5>
            Wind <br /> <strong>wind km/h</strong>
          </h5>
        </div>
        <div className="col-4">
          <h5>
            Precipitation <br /> rain%
          </h5>
        </div>
      </div>
    </div>
  );
}
