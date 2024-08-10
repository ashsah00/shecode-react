import React, { useState } from "react";
import DateDetails from "./DateDetails";
import axios from "axios";
import "./Weather.css";

function Weather(props) {
  const [temp, setTemp] = useState(null); //using state
  const [weatherData, setWeatherData] = useState({ ready: false });

  function cityEntered(event) {
    // setCity(event.target.value);
    console.log(event.tagert.value);
  }

  function showTemp(response) {
    console.log(response.data);
    console.log(new Date(response.data.dt * 1000));
    setWeatherData({
      ready: true,
      temp: response.data.main.temp,
      precipitation: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.main.name,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      date: new Date(response.data.dt * 1000),
    });
    setTemp(response.data.main.temp);
  }

  if (weatherData.ready) {
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
              onChange={cityEntered}
            ></input>
          </div>
        </form>

        <div className="formOutput">
          <h1 className="text-capitalize">{props.defaultCity}</h1>

          <div class="sub-body">
            <ul className="day-time">
              <li>
                <DateDetails date={weatherData.date} />
              </li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <span className="clearfix">
              <img src={weatherData.iconUrl} alt={weatherData.description} />
              <span className="unitTemp">
                <span className="Temp">{Math.round(temp)}</span>
                <span className="Unit"> C º | F º </span>
              </span>
            </span>

            <div className="details">
              <ul>
                <li>Precipitation: {weatherData.precipitation}</li>
                <li>Humidity: {weatherData.humidity} %</li>
                <li>Wind: {weatherData.wind} m/hr</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const key = "25fad9f7e87157d33dde0f82ab269ee8";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${key}&units=imperial`;
    axios.get(url).then(showTemp);
    console.log(url);
    return "Loading...";
  }
}

export default Weather;
