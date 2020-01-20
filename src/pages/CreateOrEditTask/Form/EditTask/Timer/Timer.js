import React, { useState, useEffect } from 'react';
import ms from 'pretty-ms';
import useTaskEditContext from 'hooks/useTaskEditContext';
import { displayMsInFractionalHourFormat } from 'utils';
import './Timer.css';


const status = {
  ON: 'ON',
  OFF: 'OFF',
  RESET: 'RESET'
}

const Timer = () => {
  const { time, updateTime } = useTaskEditContext();
  const [currentTimerStatus, setCurrentTimerStatus] = useState(status.OFF);
  const [timer, setTimer] = useState(null);

  //@TODO: Still not cleaning up if the timer is on and we back out
  useEffect(() => {
    switch (currentTimerStatus) {
      case status.ON:
        let timeOffset = Date.now() - time;
        setTimer(setInterval(() => updateTime(Date.now() - timeOffset), 1));
        break;
      case status.OFF:
        timer && clearInterval(timer);
        updateTime(time);
        break;
      case status.RESET:
        updateTime(0);
        setCurrentTimerStatus(status.OFF)
        break;
    }

    return () => setCurrentTimerStatus(status.ON)
  }, [currentTimerStatus]);


  const startTimer = () => {
    setCurrentTimerStatus(status.ON);
  };

  const stopTimer = e => {
    setCurrentTimerStatus(status.OFF);
  };

  const resetTimer = () => {
    setCurrentTimerStatus(status.RESET);
  };


  return (
    <div className="timer">
      <div className="timer__display">
        <label className="timer__display__label">Time: </label>
        <div className="timer__display__content">
          {`${ms(time)} - hours: ${displayMsInFractionalHourFormat(time)}`}
        </div>

        <div className="timer__buttons">
          {time === 0 && currentTimerStatus === status.OFF &&
            (<button className="timer__start" onClick={startTimer}>
              start
          </button>)}

          {time !== 0 && currentTimerStatus == status.OFF && (
            <button className="timer__resume" onClick={startTimer}>
              resume
            </button>
          )}

          {currentTimerStatus === status.ON &&
            (<button className="timer__stop" onClick={stopTimer}>
              stop
          </button>)}

          {timer > 0 && <button className="timer__reset" onClick={resetTimer}>
            reset
          </button>}
        </div>
      </div>
    </div>
  );
};



export default Timer;
