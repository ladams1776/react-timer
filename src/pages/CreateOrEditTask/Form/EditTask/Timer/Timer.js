import React, { useState, useEffect } from 'react';
import ms from 'pretty-ms';
import useTaskEditContext from 'hooks/useTaskEditContext';
import { displayMsInFractionalHourFormat } from 'utils';
import './Timer.css';

const Timer = () => {
  const { time, updateTime } = useTaskEditContext();
  const [isActive, setIsActive] = useState(false);
  const [timer, setTimer] = useState(null);

  const toggle = () => setIsActive(!isActive);

  const reset = () => {
    setIsActive(false);
    updateTime(0);
  }

  useEffect(() => {
    if (isActive) {
      let timeOffset = Date.now() - time;
      setTimer(setInterval(() => updateTime(Date.now() - timeOffset), 1));
    } else if (!isActive && time !== 0) {
      clearInterval(timer)
    }

    return () => clearInterval(timer)
  }, [isActive, time]);

  return (
    <div className="timer">
      <div className="timer__display">
        <label className="timer__display__label">Time: </label>
        <div className="timer__display__content">
          {`${ms(time)} - hours: ${displayMsInFractionalHourFormat(time)}`}
        </div>

        <div className="timer__buttons">
          {time === 0 && !isActive &&
            (<button className="timer__start" onClick={toggle}>
              start
          </button>)}

          {isActive &&
            (<button className="timer__stop" onClick={toggle}>
              stop
          </button>)}

          {time !== 0 && !isActive && (
            <button className="timer__resume" onClick={toggle}>
              resume
            </button>
          )}


          {time > 0 && <button className="timer__reset" onClick={reset}>
            reset
          </button>}
        </div>
      </div>
    </div>
  );
};



export default Timer;
