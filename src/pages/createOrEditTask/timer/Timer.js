import React, { useState, useCallback } from 'react';
import ms from 'pretty-ms';
import { displayMsInFractionalHourFormat } from 'utils';
import TimerButtons from './timerButtons/TimerButtons';
import useUpdateCurrentTime from './hooks/useUpdateCurrentTime';
import { useTimeContext } from '../hooks';

const Timer = () => {
  const [isActive, setIsActive] = useState(false);
  const { time, setTime } = useTimeContext();
  const setTimeCallback = useCallback(times => setTime(times), [setTime]);
  useUpdateCurrentTime(time, isActive, setTimeCallback);

  return (
    <TimerButtons
      time={time}
      setTime={setTimeCallback}
      isActive={isActive}
      setIsActive={setIsActive}
    >
      <div data-test-id="timer__display__content">
        <div data-test-id="fractionHour">{`Hours: ${displayMsInFractionalHourFormat(
          time,
        )}`}</div>
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
