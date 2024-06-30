import React from "react";
import axios from "axios";

function Weather(props) {
  function showTemp(response) {
    alert(response.data.main.temp);
  }
  let key = "25fad9f7e87157d33dde0f82ab269ee8";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${key}&units=metric`;
  axios.get(url).then(showTemp);

  return <div>Weather is great in {props.city}</div>;
}

export default Weather;
