import React, { useState } from "react";
import Key from "./components/Key";
import Display from "./components/Display";

const clips = {
  q: {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  w: {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  e: {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  a: {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  s: {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  d: {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  z: {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  x: {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  c: {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
};

function App() {
  const [state, setState] = useState("");
  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(0.9);

  const dis = (el) => {
    setState(el);
  };

  const powerOnOff = () => {
    setPower(!power);
  };

  return (
    <div id="drum-machine">
      <div className="key-wrapper">
        <div className="key-container">
          <Key clip={clips.q} display={dis} on={power} vol={volume} />
          <Key clip={clips.w} display={dis} on={power} vol={volume} />
          <Key clip={clips.e} display={dis} on={power} vol={volume} />
        </div>
        <div className="key-container">
          <Key clip={clips.a} display={dis} on={power} vol={volume} />
          <Key clip={clips.s} display={dis} on={power} vol={volume} />
          <Key clip={clips.d} display={dis} on={power} vol={volume} />
        </div>
        <div className="key-container">
          <Key clip={clips.z} display={dis} on={power} vol={volume} />
          <Key clip={clips.x} display={dis} on={power} vol={volume} />
          <Key clip={clips.c} display={dis} on={power} vol={volume} />
        </div>
      </div>
      <div id="display">
        <Display
          dis={state}
          onOff={powerOnOff}
          active={power}
          vol={volume}
          setVol={setVolume}
        />
      </div>
    </div>
  );
}

export default App;
