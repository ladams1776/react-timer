import React from 'react';
import ms from 'pretty-ms';
import { displayMsInFractionalHourFormat } from 'utils';
import { useUpdateCurrentTime } from './hooks';
import './Timer.css';

const Timer = ({ children, time, setTime, isActive = false, setIsActive }) => {
  const toggle = () => setIsActive(!isActive);

  useUpdateCurrentTime(time, isActive, setTime);

  const reset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <div className="timer">
      <div className="timerButtons">
        <button
          className="timerReset"
          data-test-id="timerReset"
          onClick={reset}
          disabled={time === 0}
        >
          reset
        </button>

        {isActive && (
          <button className="timerStop"           
          data-test-id="timerStop"
          onClick={toggle}>
            stop
          </button>
        )}

        {time !== 0 && !isActive && (
          <button className="timerResume" onClick={toggle}>
            resume
          </button>
        )}

        {time === 0 && !isActive && (
          <button className="timerResume" onClick={toggle}>
            start
          </button>
        )}
      </div>
      <div className="timerDisplay">
        <div className="timerProject">{children}</div>
        <span
          className="timerCurrent"
          data-test-id="timer__display__content"
        >{`${ms(time)} - hours: ${displayMsInFractionalHourFormat(
          time,
        )}`}</span>
      </div>
    </div>
  );
};

export default Timer;
