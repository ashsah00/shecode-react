import React from "react";
import DateDetails from "./DateDetails";
import WeatherIcon from "./WeatherIcon";
import TempUnits from "./TempUnits";

function WeatherDetails(props) {
  return (
    <div className="formOutput">
      <h1 className="text-capitalize">{props.info.city}</h1>

      <div class="sub-body">
        <ul className="day-time">
          <li>
            <DateDetails date={props.info.date} />
          </li>
          <li className="text-capitalize">{props.info.description}</li>
        </ul>
        <span className="clearfix">
          <WeatherIcon state={props.info.icon} className="icon" />
          <span>
            <TempUnits farenheit={props.info.temp} />
          </span>
        </span>

        <div className="details">
          <ul>
            <li>Precipitation: {props.info.precipitation}</li>
            <li>Humidity: {props.info.humidity} %</li>
            <li>Wind: {props.info.wind} m/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
