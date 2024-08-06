import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

function Weather() {
  const [temp, setTemp] = useState(null); //using state
  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function showTemp(response) {
    console.log(response.data);
    setWeatherData({
      //  city: response.data.main.name,
      temp: response.data.main.temp,
      precipitation: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.main.wind.speed,
    });
    setTemp(response.data.main.temp);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="weatherContainer">
        <form className="row">
          <div className="col-9">
            <input
              type="Search"
              placeholder="Enter A City..."
              //  className="cityInput"
              className="form-control"
              autoFocus="on"
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

        <div className="formOutput">
          <h1>Rockville</h1>

          <div class="sub-body">
            <ul className="day-time">
              <li>Wednesday 08:02pm</li>
              <li>Mostly sunny</li>
            </ul>
            <span className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="weather icon"
              />
              <span className="unitTemp">
                <span className="Temp">{Math.round(temp)}</span>
                <span className="Unit">ºF</span>
              </span>
            </span>

            <div className="details">
              <ul>
                <li>Precipitation: {weatherData.precipitation}</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const key = "25fad9f7e87157d33dde0f82ab269ee8";
    let city = "Bowie";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`;
    axios.get(url).then(showTemp);
    console.log(url);
    return "Loading...";
  }
}

export default Weather;
