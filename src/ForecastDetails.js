import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDate from "./ForecastDate";

function ForecastDetails(props) {
  let [loaded, setloaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setloaded(false);
  }, [props.cityF]);

  function handleResponse(response) {
    //console.log(response.data);

    setForecast(response.data.daily);
    setloaded(true);
  }
  //<WeatherIcon state="03n" />

  if (loaded) {
    // console.log(forecast);

    return (
      <div className="container">
        <div className="row">
          {" "}
          {forecast.map(function (dailyF, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastDate data={dailyF} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let key = "d431c23aa7bd0aod0t4f840f8a543f42";

    let apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${props.cityF}&key=${key}&units=imperial`;
    console.log(apiURL);

    axios.get(apiURL).then(handleResponse);

    return null;
  }
}

export default ForecastDetails;
