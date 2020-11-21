import React, { useState, useCallback } from 'react';
import ms from 'pretty-ms';
import { displayMsInFractionalHourFormat } from 'utils';
import { useTimeContext } from '../hooks';
import useUpdateCurrentTime from './hooks/useUpdateCurrentTime';
import TimerButtons from './timerButtons/TimerButtons';

const Timer = () => {
  const [isActive, setIsActive] = useState(false);
  const { time, setTime } = useTimeContext();
  const setTimeCallback = useCallback(times => setTime(times), [setTime]);
  useUpdateCurrentTime(time, isActive, setTimeCallback);
  const yeah = displayMsInFractionalHourFormat(time);

  return (
    <TimerButtons
      time={time}
      setTime={setTimeCallback}
      isActive={isActive}
      setIsActive={setIsActive}
    >
      <div data-test-id="timer__display__content">
        <div data-test-id="fractionHour">{`Hours: ${yeah}`}</div>
        <input
          data-test-id="secondDecimalDigitHour"
          value={ms(time, { secondsDecimalDigits: 2 })}
          readOnly
        />
      </div>
    </TimerButtons>
  );
};

export default Timer;
