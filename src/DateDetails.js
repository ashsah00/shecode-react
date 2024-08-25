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
  // let date = props.date.getDate();
  //  let month = props.date.getMonth();
  //console.log(month);

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
      {day}{" "}
      <strong>
        {hours}:{mins}
      </strong>
    </div>
  );
}

export default DateDetails;
