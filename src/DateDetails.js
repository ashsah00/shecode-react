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

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (mins < 10) {
    mins = `0${mins}`;
  }

  return (
    <div>
      {day} {hours}:{mins}
    </div>
  );
}

export default DateDetails;
