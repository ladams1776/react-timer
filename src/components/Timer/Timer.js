import React, { useState, useContext } from "react";
import ms from "pretty-ms";
import "./Timer.css";
import TaskEditFormContext from "../../TaskEditFormContext";

const Timer = () => {
  const context = useContext(TaskEditFormContext);
  const { time, updateTime } = context;

  const [isOn, setIsOn] = useState(false);
  const [timer, setTimer] = useState(null);

  const startTimer = () => {
    setIsOn(true);
    let timeOffset = Date.now() - time;
    setTimer(setInterval(() => updateTime(Date.now() - timeOffset), 1));
  };

  const stopTimer = e => {
    setIsOn(false);
    clearInterval(timer);
    updateTime(time);
  };

  const resetTimer = () => {
    stopTimer();
    updateTime(0);
    setIsOn(false);
  };

  let startTime =
    time === 0 && !isOn ? (
      <button className="timer__start" onClick={startTimer}>
        start
      </button>
    ) : null;

  let stopTime = isOn ? (
    <button className="timer__stop" onClick={stopTimer}>
      stop
    </button>
  ) : null;

  let resumeTime =
    time !== 0 && !isOn ? (
      <button className="timer__resume" onClick={startTimer}>
        resume
      </button>
    ) : null;

  let resetTime =
    isOn || time > 0 ? (
      <button className="timer__reset" onClick={resetTimer}>
        reset
      </button>
    ) : null;

  return (
    <div className="timer">
      <div className="timer__display">
        <label className="timer__display__label">Time: </label>
        <div className="timer__display__content">
          {ms(time)} - hours: {(time / 1000 / 60 / 60).toFixed(2)}
        </div>
      </div>

      <div className="timer__buttons">
        {startTime}
        {resumeTime}
        {stopTime}
        {resetTime}
      </div>
    </div>
  );
};

export default Timer;
