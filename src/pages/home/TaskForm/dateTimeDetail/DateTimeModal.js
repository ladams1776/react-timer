import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import styles from './DateTimeModal.module.css'

const DateTimeModal = ({ dateTime, setIsShowing }) => {

    const myTimezone = "America/New_York";
    const myDatetimeFormat = "YYYY-MM-DD hh:mm:ss";

    return <div className={styles.modal}>
        <div className={styles.modalContent}>
            {dateTime.map(dT => {
                const myDatetimeString = moment(dT.date)
                    .tz(myTimezone)
                    .format(myDatetimeFormat);

                return (<div className={styles.content} key={dT.date + dT.time}>
                    <div className={styles.date}>Date: {myDatetimeString}</div>
                    <div className={styles.time}>Minutes: {dT.time}</div>
                </div>)
            })}
            <button className={styles.closeButton} onClick={() => setIsShowing(false)}>Close</button>
        </div>
    </div>
};

DateTimeModal.prototype = {
    dateTime: PropTypes.arrayOf(Object),
    setIsShowing: PropTypes.func,
}


export default DateTimeModal;