import React from 'react';
import ms from 'pretty-ms';
import { displayMsInFractionalHourFormat } from 'utils';
import { useUpdateCurrentTime } from './hooks';
import style from './MinTimer.scss';

const MinTimer = ({ children, time, setTime, isActive = false, setIsActive }) => {
  const toggle = () => setIsActive(!isActive);

  useUpdateCurrentTime(time, isActive, setTime);

  const reset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <div className={style.timer}>
      <div className={style.timerButtons}>
        <button
          className={style.timerReset}
          data-test-id="timerReset"
          onClick={reset}
          disabled={time === 0}
        />

        {isActive && (
          <button className={timerStop}
            data-test-id="timerStop"
            onClick={toggle} />
        )}

        {time !== 0 && !isActive && (
          <button className={timerResume} onClick={toggle} />
        )}

        {time === 0 && !isActive && (
          <button className={timerResume} onClick={toggle} />
        )}
        {children}
        <span className={timerCurrent} data-test-id="timer__display__content">{`${ms(time)}`}</span>
      </div>
    </div>
  );
};

export default MinTimer;
