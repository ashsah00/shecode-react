import React from "react";
//import axios from "axios";
import "./Weather.css";

function Weather() {
  return (
    <div className="weatherContainer">
      <form className="row">
        <div class="col-9">
          <input
            type="Search"
            placeholder="Enter A City..."
            //  className="cityInput"
            className="form-control"
            autoFocus="on"
          ></input>
        </div>
        <div class="col-3">
          <input
            type="submit"
            text="Search"
            //className="submit"
            className="btn btn-primary w-100"
          ></input>
        </div>
      </form>

      <div className="formOutput">
        <h1>New York</h1>

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
              <span class="Temp">60 </span>
              <span class="Unit">ºC | ºF</span>
            </span>
          </span>

          <div className="details">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: 72%</li>
              <li>Wind: 5 m/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
