import React from "react";

function DateDetails(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  // let date = props.date.get
  let hours = props.date.getHours();
  let mins = props.date.getMinutes();

  if (day < 10) {
    day = `0${day}`;
  }

  if (mins < 10) {
    mins = `0${mins}`;
  }

  return (
    <div>
      {day} {mins}:{hours}
    </div>
  );
}

export default DateDetails;
