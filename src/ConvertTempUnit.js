import React, { useState } from "react";

export default function ConvertTempUnit({ temp }) {
  const [temperature, setTemperature] = useState(temp);
  const [showFahrenheit, setShowFahrenheit] = useState(false);

  function convertToFahrenheit(value) {
    return Math.round((value * 9) / 5 + 32);
  }

  function handleFahrenheitClick(event) {
    event.preventDefault();
    setShowFahrenheit(true);
    setTemperature(convertToFahrenheit(temp));
  }

  function handleCelsiusClick(event) {
    event.preventDefault();
    setShowFahrenheit(false);
    setTemperature(temp);
  }

  return (
    <div className="TempUnit">
      {showFahrenheit ? (
        <>
          {Math.round(temperature)} °F{" "}
          <span className="active-link" onClick={handleCelsiusClick}>
            (°C)
          </span>
        </>
      ) : (
        <>
          {Math.round(temperature)} °C{" "}
          <span className="active-link" onClick={handleFahrenheitClick}>
            (°F)
          </span>
        </>
      )}
    </div>
  );
}
