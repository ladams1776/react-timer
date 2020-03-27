import React from 'react';
import ms from 'pretty-ms';
import { displayMsInFractionalHourFormat } from 'utils';
import { useUpdateCurrentTime } from './hooks';
import styles from './MinTimer.module.css';

const MinTimer = ({ children, time, setTime, isActive = false, setIsActive }) => {
  const toggle = () => setIsActive(!isActive);

  useUpdateCurrentTime(time, isActive, setTime);

  const reset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <div className={styles.timer}>
      <div className={styles.timerButtons}>
        <button
          className={styles.timerReset}
          data-test-id="timerReset"
          onClick={reset}
          disabled={time === 0}
        />

        {isActive && (
          <button className={styles.timerStop}
            data-test-id="timerStop"
            onClick={toggle} />
        )}

        {time !== 0 && !isActive && (
          <button className={styles.timerResume} onClick={toggle} />
        )}

        {time === 0 && !isActive && (
          <button className={styles.timerResume} onClick={toggle} />
        )}
        {children}
        <span className={styles.timerCurrent} data-test-id="timer__display__content">{`${ms(time)}`}</span>
      </div>
    </div>
  );
};

export default MinTimer;
