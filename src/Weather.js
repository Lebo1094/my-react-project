import React from "react";

export default function Weather({ weatherData }) {
  return (
    <div className="Weather">
      <h2>Current Weather</h2>
      <div className="row">
        <div className="col-5">
          <h3>
            city
            <br />
            Tuesday 20:30
          </h3>
        </div>
        <div className="col-4">
          <h3>
            <strong>temperature°C</strong>
            <br />
            <strong>description</strong>{" "}
          </h3>
        </div>
        <div className="col-3">icon</div>
      </div>

      <h2>Air Conditions</h2>
      <div className="row">
        <div className="col-4">
          <h3>
            Humidity <br /> <strong>humidity%</strong>
          </h3>
        </div>
        <div className="col-4">
          <h3>
            Wind <br /> <strong>wind km/h</strong>
          </h3>
        </div>
        <div className="col-4">
          <h3>
            Precipitation <br /> rain%
          </h3>
        </div>
      </div>
    </div>
  );
}
