import React, { useState } from "react";

export default function ConvertFeelUnit({ tempfeel }) {
  const [feelsLike, setFeelsLike] = useState(tempfeel);
  const [showFahrenheit, setShowFahrenheit] = useState(false);

  function convertToFahrenheit(value) {
    return Math.round((value * 9) / 5 + 32);
  }

  function handleFahrenheitClick(event) {
    event.preventDefault();
    setShowFahrenheit(true);
    setFeelsLike(convertToFahrenheit(tempfeel));
  }

  function handleCelsiusClick(event) {
    event.preventDefault();
    setShowFahrenheit(false);
    setFeelsLike(tempfeel);
  }

  return (
    <div className="FeelUnit">
      {showFahrenheit ? (
        <>
          {Math.round(feelsLike)} °F{" "}
          <span className="active-link" onClick={handleCelsiusClick}>
            (°C)
          </span>
        </>
      ) : (
        <>
          {Math.round(feelsLike)} °C{" "}
          <span className="active-link" onClick={handleFahrenheitClick}>
            (°F)
          </span>
        </>
      )}
    </div>
  );
}
