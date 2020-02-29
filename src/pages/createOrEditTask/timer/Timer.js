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
      <div className="timer__display">
        <div className="timer__display__content" data-test-id="timer__display__content">
          {`${ms(time)} - hours: ${displayMsInFractionalHourFormat(time)}`}
        </div>

        <div className="timer__buttons">

          {time > 0 && <button className="timer__reset" onClick={reset}>
            reset
          </button>}

          {isActive &&
            (<button className="timer__stop" onClick={toggle}>
              stop
          </button>)}

          {time !== 0 && !isActive && (
            <button className="timer__resume" onClick={toggle}>
              resume
            </button>
          )}

          {time === 0 && !isActive &&
            (<button className="timer__start" onClick={toggle}>
              start
          </button>)}

          {children}

        </div>
      </div>
    </div>
  );
};



export default Timer;
