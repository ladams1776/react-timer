import React, { useState } from 'react';
import ms from 'pretty-ms';
import { displayMsInFractionalHourFormat } from 'utils';
import ControlPanel from './controlPanel/ControlPanel';
import useUpdateCurrentTime from './hooks/useUpdateCurrentTime'
import { useTimeContext } from '../hooks';

const Timer = ({ setTime, isActive, setIsActive }) => {
  const { time } = useTimeContext();
  useUpdateCurrentTime(time, isActive, setTime);

  return (
    <ControlPanel
      time={time}
      setTime={setTime}
      isActive={isActive} 
      setIsActive={setIsActive}
    >
      <div data-test-id="timer__display__content">
        <div data-test-id="fractionHour">{`Hours: ${displayMsInFractionalHourFormat(
          time,
        )}`}</div>
        <input data-test-id="secondDecimalDigitHour"
          value={ms(time, { secondsDecimalDigits: 2 })}
          readOnly
        />
      </div>
    </ControlPanel>
  );
};

export default Timer;
