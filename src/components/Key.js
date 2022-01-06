import React, { useEffect, useState } from "react";

function Key({ clip, display, on, vol }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [on, vol]);

  const handleKeyPress = (e) => {
    if (e.keyCode === clip.keyCode) {
      playSound();
    }
  };

  const playSound = () => {
    const soundId = document.getElementById(clip.keyTrigger);
    soundId.currentTime = 0;
    soundId.volume = vol;
    if (on) {
      setActive(true);
      setTimeout(() => {
        setActive(false);
      }, 200);
      soundId.play();
      display(clip.id);
    }
  };

  return (
    <div
      id={clip.id}
      className={`drum-pad ${active && "key-active"}`}
      onClick={playSound}
    >
      <audio src={clip.url} id={clip.keyTrigger} className="clip" />
      {clip.keyTrigger}
    </div>
  );
}

export default Key;
