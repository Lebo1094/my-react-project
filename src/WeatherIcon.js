import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon({ icon, code }) {
  // Define mappings for different weather conditions
  const weatherIcons = {
    cloudy: {
      icon: "CLOUDY",
      color: "goldenrod",
      size: 64,
      animate: true,
    },
    rain: {
      icon: "RAIN",
      color: "goldenrod",
      size: 64,
      animate: true,
    },
    wind: {
      icon: "WIND",
      color: "goldenrod",
      size: 64,
      animate: true,
    },
    snow: {
      icon: "SNOW",
      color: "goldenrod",
      size: 64,
      animate: true,
    },
    partly_cloudy: {
      icon: "PARTLY_CLOUDY_DAY",
      color: "goldenrod",
      size: 64,
      animate: true,
    },

    mist: {
      icon: "FOG",
      color: "goldenrod",
      size: 64,
      animate: true,
    },
  };

  // Default icon properties
  let defaultIcon = {
    icon: "DEFAULT_ICON", // Default value if condition doesn't match
    color: "defaultColor",
    size: 64,
    animate: true,
  };

  // Check condition and modify defaultIcon if needed
  if (code === "04d") {
    defaultIcon = {
      icon: "CLOUDY",
      color: "goldenrod",
      size: 64,
      animate: true,
    };
  } else {
    defaultIcon = {
      icon: "CLEAR_NIGHT",
      color: "goldenrod",
      size: 64,
      animate: true,
    };
  }

  // Function to get icon properties based on icon description
  const getWeatherIcon = (description) => {
    return weatherIcons[description.toLowerCase()] || defaultIcon;
  };

  // Get icon properties based on the provided icon prop
  const { icon: weatherIcon, color, size, animate } = getWeatherIcon(icon);

  return (
    <ReactAnimatedWeather
      icon={weatherIcon}
      color={color}
      size={size}
      animate={animate}
    />
  );
}
