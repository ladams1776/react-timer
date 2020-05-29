import React from 'react';
import ms from 'pretty-ms';
import { displayMsInFractionalHourFormat } from 'utils';
import { useTimeContext } from '../hooks';

const Timer = () => {
  const { time } = useTimeContext();

  return (
    <div data-test-id="timer__display__content">
      <div data-test-id="fractionHour">{`Hours: ${displayMsInFractionalHourFormat(
        time,
      )}`}</div>
      <div data-test-id="secondDecimalDigitHour">
        {ms(time, { secondsDecimalDigits: 2 })}
      </div>
    </div>
  );
};

export default Timer;
