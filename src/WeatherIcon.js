import React from "react";
import { WeatherSvg } from "weather-icons-animated";

function WeatherIcon(props) {
  const iconMapping = {
    "01d": "sunny",
    "01n": "clear-night",
    "02d": "cloudy",
    "02n": "cloudy",
    "03d": "partlycloudy",
    "03n": "partlycloudy",
    "04d": "cloudy",
    "04n": "cloudy",
    "09d": "rain",
    "09n": "rain",
    "10d": "lightning-rainy",
    "10n": "lightning-rainy",
    "11d": "hail",
    "11n": "hail",
    "13d": "snowy",
    "13n": "snowy",
    "50d": "fog",
    "50n": "fog",
  };

  return (
    <WeatherSvg state={iconMapping[props.state]} width={100} height={90} />
  );
}

export default WeatherIcon;
