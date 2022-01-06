import React from "react";

function Display({ dis, onOff, active, vol, setVol }) {
  const handleClick = () => {
    onOff();
  };

  return (
    <div className="display-wrapper">
      <div className="power">
        <button onClick={handleClick}>
          <i
            class={`fas fa-power-off fa-3x btn ${active && "button-active"}`}
          ></i>
        </button>
        <div className="display">{dis}</div>
      </div>
      <input
        type={"range"}
        step={0.01}
        min={0}
        max={1}
        value={vol}
        className="vol"
        onChange={(e) => setVol(e.target.value)}
      />
    </div>
  );
}

export default Display;
