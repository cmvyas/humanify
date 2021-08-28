import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from "react";
import SettingsContext from "./SettingsContext";
import ReactSlider from "react-slider";
import "./slider.css";
import PlaySound from "./PlaySound";

const red = "#BEAEE2";
const green = "#E5B299";

function Timer() {
  const settingsInfo = useContext(SettingsContext);

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState("work"); // work/break/null
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {
    function switchMode() {
      const nextMode = modeRef.current === "work" ? "break" : "work";
      const nextSeconds =
        (nextMode === "work"
          ? settingsInfo.workMinutes
          : settingsInfo.breakMinutes) * 60;

      setMode(nextMode);
      modeRef.current = nextMode;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    }

    secondsLeftRef.current = settingsInfo.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }

      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [settingsInfo]);

  const totalSeconds =
    mode === "work"
      ? settingsInfo.workMinutes * 60
      : settingsInfo.breakMinutes * 60;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  let minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = "0" + seconds;
  if (minutes < 10) minutes = "0" + minutes;

  return (
    <div className='timer-main'>
      <header>
        <Link style={{ textDecoration: " none" }} to='/'>
          <h2 className='logo'>HumaniFY</h2>
        </Link>
      </header>
      <CircularProgressbar
        className='circular'
        value={percentage}
        text={minutes + ":" + seconds}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: mode === "work" ? red : green,
          tailColor: "rgba(255,255,255,.2)",
        })}
      />
      <div className='timermusic' style={{ marginTop: "20px" }}>
        {isPaused ? (
          <PlayButton
            onClick={() => {
              setIsPaused(false);
              isPausedRef.current = false;
            }}
          />
        ) : (
          <PauseButton
            onClick={() => {
              setIsPaused(true);
              isPausedRef.current = true;
            }}
          />
        )}

        <PlaySound />
      </div>

      <div style={{ textAlign: "left" }} className='sliderdiv'>
        <center>
          <label>Meditate: {settingsInfo.workMinutes}:00</label>
          <ReactSlider
            className={"slider"}
            thumbClassName={"thumb"}
            trackClassName={"track"}
            value={settingsInfo.workMinutes}
            onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
            min={1}
            max={60}
          />
        </center>
      </div>
    </div>
  );
}

export default Timer;
