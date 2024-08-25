import React, { useState } from "react";
import WeatherDetails from "./WeatherDetails";
import axios from "axios";
import "./Weather.css";
import ForecastDetails from "./ForecastDetails";

function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function search() {
    const key = "25fad9f7e87157d33dde0f82ab269ee8";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`;
    axios.get(url).then(showTemp);
    //console.log(url);
  }

  function citySubmit(event) {
    //sending that searched value to API
    event.preventDefault();
    //console.log(city);
    //alert(city);
    search();
  }

  function cityEntered(event) {
    //store searched value
    event.preventDefault();
    setCity(event.target.value);
  }

  function showTemp(response) {
    console.log(response.data);
    //  console.log(new Date(response.data.dt * 1000));
    //console.log(response.data.main.name);
    // console.log(response.data.weather[0].icon);
    setWeatherData({
      ready: true,
      temp: response.data.main.temp,
      precipitation: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name, //so we can send it as a prop later
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      iconURL: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.weather[0].description}.png`,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weatherContainer">
        <form className="row" onSubmit={citySubmit}>
          <div className="col-9">
            <input
              type="Search"
              placeholder="Enter A City..."
              //  className="cityInput"
              className="form-control"
              autoFocus="on"
              onChange={cityEntered}
            ></input>
          </div>
          <div className="col-3">
            <input
              type="submit"
              text="Search"
              //className="submit"
              className="btn btn-primary w-100"
            ></input>
          </div>
        </form>
        <hr></hr>
        <WeatherDetails info={weatherData} />
        <hr></hr>
        <ForecastDetails cityF={city} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

export default Weather;
