import React, {useState, useEffect, useRef} from "react";
import './TempCard.css';

function TempCard() {
  const [tempVal, setTempVal] = useState(10);
  const tempRef = useRef();

  useEffect(() => {
    // updateBackground();
    updateBackgroundRef();
  });

  function getTempColor() {
    if (tempVal < 5) return "lightBlueBg";
    else if (tempVal < 10) return "blueBg";
    else if (tempVal < 15) return "darkBlueBg";
    else if (tempVal < 20) return "orangeBg";
    else if (tempVal < 25) return "darkOrangeBg";
    else return "redBg";
  }

  // Method to update background using DOM Selector
  function updateBackground() {
    let element = document.getElementById("temperature");
    let color = getTempColor();
    element.className = `temperature ${color}`;
  }

  // Method to update background using Reference Hook
  function updateBackgroundRef() {
    let color = getTempColor();
    tempRef.current.className = `temperature ${color}`;
  }

  return (
    <div className="tempContainer">
      <div ref={tempRef} id="temperature" className="temperature">
        {tempVal} °C
      </div>
      <div className="actionButtons">
        <button
          className="btnClass addButton"
          onClick={() => setTempVal(tempVal + 1)}
        >
          +
        </button>
        <button
          className="btnClass minusButton"
          onClick={() => setTempVal(tempVal - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default TempCard;