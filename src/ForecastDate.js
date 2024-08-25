import React from "react";

function ForecastDate(props) {
  function maxT() {
    return `${Math.round(props.data.temperature.maximum)}`;
  }

  function minT() {
    let temp = Math.round(props.data.temperature.minimum);
    return `${temp}`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <ul className="day1">
        <li>{day()}</li>
        <li>
          <img alt="forecast_icon" src={props.data.condition.icon_url} />
        </li>
        <li>
          <strong>{maxT()}</strong> | {minT()}
        </li>
      </ul>
    </div>
  );
}

export default ForecastDate;
