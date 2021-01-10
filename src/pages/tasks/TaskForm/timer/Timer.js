import React, { useState, useCallback, useEffect } from 'react';
import ms from 'pretty-ms';
import { displayMsInFractionalHourFormat } from 'utils';
import { useTimeContext } from '../hooks';
import useUpdateCurrentTime from './hooks/useUpdateCurrentTime';
import TimerButtons from './timerButtons/TimerButtons';
import useTaskByIdSelector from '../../../../redux/selectors/useTaskByIdSelector';

const Timer = () => {
  const [isActive, setIsActive] = useState(false);
  const task = useTaskByIdSelector();
  const { time, setTime } = useTimeContext();
  useEffect(() => setTime(task.time), [task.time, setTime]);
  const setTimeCallback = useCallback(times => setTime(times), [setTime]);
  useUpdateCurrentTime(time, isActive, setTimeCallback);
  const millisecondsInFractionalHourFormat = displayMsInFractionalHourFormat(time);
  const msTime = (time && ms(time, { secondsDecimalDigits: 2 })) || 0;

  return (
    <TimerButtons
      time={time}
      setTime={setTimeCallback}
      isActive={isActive}
      setIsActive={setIsActive}
    >
      <div data-test-id="timer__display__content">
        <div data-test-id="fractionHour">{`Hours: ${millisecondsInFractionalHourFormat}`}</div>
        <input
          data-test-id="secondDecimalDigitHour"
          value={msTime}
          readOnly
        />
      </div>
    </TimerButtons>
  );
};

export default Timer;
