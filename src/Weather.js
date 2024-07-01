import React from "react";
import axios from "axios";
import "./Weather.css";

function Weather(props) {
  function showTemp(response) {
    console.log(response.data.main.temp);
  }
  let key = "25fad9f7e87157d33dde0f82ab269ee8";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${key}&units=metric`;
  axios.get(url).then(showTemp);

  return (
    <div>
      Weather is great in {props.city}
      <br />
      <br />
      <footer>
        Coded by <em>Ash Sahin.</em>Code hosted on{" "}
        <a href="https://github.com/ashsah00/shecode-react">Github</a> and
        website on <a href="https://weatheract.netlify.app">Netlify</a>
      </footer>
    </div>
  );
}

export default Weather;
