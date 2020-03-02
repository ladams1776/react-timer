import React, { useState } from 'react';
import ms from 'pretty-ms';
import { displayMsInFractionalHourFormat } from 'utils';
import { useUpdateCurrentTime } from './hooks';
import './Timer.css';


const Timer = ({ children, time, setTime }) => {
  const [isActive, setIsActive] = useState(false);
  const toggle = () => setIsActive(!isActive);

  useUpdateCurrentTime(time, isActive, setTime);

  const reset = () => {
    setIsActive(false);
    setTime(0);
  }

  return (
    <div className="timer">
      <div className="timerButtons">
        {time > 0 && <button className="timerReset" onClick={reset}>
          reset
          </button>}

        {isActive &&
          (<button className="timerStop" onClick={toggle}>
            stop
          </button>)}

        {time !== 0 && !isActive && (
          <button className="timerResume" onClick={toggle}>
            resume
            </button>
        )}

        {time === 0 && !isActive &&
          (<button className="timerStart" onClick={toggle}>
            start
          </button>)}
      </div>
      <div className="timerDisplay">
        <div className="timerProject">{children}</div>
        <span className="timerCurrent" data-test-id="timer__display__content">{`${ms(time)} - hours: ${displayMsInFractionalHourFormat(time)}`}</span>
      </div>
    </div>
  );
};



export default Timer;
