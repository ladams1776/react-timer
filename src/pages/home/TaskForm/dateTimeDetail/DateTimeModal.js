import React from 'react';
import PropTypes from 'prop-types';
import styles from './DateTimeModal.module.css'

const DateTimeModal = ({ dateTime, setIsShowing }) => {
    return <div className={styles.modal}>
        <div className={styles.modalContent}>
            {dateTime.map(dT => {
                return (<div className={styles.content} key={dT.date + dT.time}>
                    <div className={styles.date}>Date:{dT.date}</div>
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