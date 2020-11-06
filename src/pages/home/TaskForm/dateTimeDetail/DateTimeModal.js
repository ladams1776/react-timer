import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import styles from './DateTimeModal.module.css'

const DateTimeModal = ({ dateTimes, setIsShowing }) => {

    const myTimezone = "America/New_York";
    const myDatetimeFormat = "YYYY-MM-DD hh:mm:ss a";

    return <div className={styles.modal}>
        <div className={styles.modalContent}>
            {dateTimes.map(dT => {
                const myDatetimeString = moment(dT.date)
                    .tz(myTimezone)
                    .format(myDatetimeFormat);

                return (<form
                    className={styles.taskForm}
                    method='PUT'>
                    <div className={styles.content} key={dT.id}>
                        <div className={styles.date}>Date: {myDatetimeString}</div>
                        <div className={styles.time}>Minutes: <input onChange={e => {}} value={dT.time} className={styles.time}/></div>
                    </div>
                </form>)
            })}
            <button className={styles.closeButton} onClick={() => setIsShowing(false)}>Close</button>
        </div>
    </div>
};

DateTimeModal.prototype = {
    dateTimes: PropTypes.arrayOf(Object),
    setIsShowing: PropTypes.func,
}

export default DateTimeModal;