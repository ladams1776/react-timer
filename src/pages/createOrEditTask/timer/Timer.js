import React from 'react';
import ms from 'pretty-ms';
import { displayMsInFractionalHourFormat } from 'utils';
import styles from './Timer.module.css';

const Timer = ({ time }) => {
  return (
        <span
          className={styles.timer}
          data-test-id="timer__display__content">
          {`${ms(time)} - hours: ${displayMsInFractionalHourFormat(time)}`}
        </span>
  );
};

export default Timer;
