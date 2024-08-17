import React, { useState } from "react";
import "./Weather.css";

function TempUnits(props) {
  const [unit, setUnit] = useState("farenheit");

  function showfarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");

    // Celsius = ;
  }

  function showcelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function celsius() {
    return ((props.farenheit - 32) * 5) / 9;
  }
  if (unit === "farenheit") {
    return (
      <div>
        <span className="unitTemp">
          <span className="Temp">{Math.round(props.farenheit)}</span>
          <span className="Unit">
            ºF |
            <a href="/" onClick={showcelsius}>
              ºC{" "}
            </a>
          </span>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="unitTemp">
          <span className="Temp">{Math.round(celsius())}</span>
          <span className="Unit">
            ºC |
            <a href="/" onClick={showfarenheit}>
              ºF{" "}
            </a>
          </span>
        </span>
      </div>
    );
  }
}

export default TempUnits;
