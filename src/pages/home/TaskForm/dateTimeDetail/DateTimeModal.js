import React from 'react';
import styles from './DateTimeModal.module.css'

const DateTimeModal = ({ dateTime }) => {
    return <div className={styles.modal}>
        {dateTime.map(dT => {
            return (<div className={styles.content} key={dT.date + dT.time}>
                <div className={styles.date}>Date:{dT.date}</div>
                <div className={styles.time}>Minutes: {dT.time}</div>
            </div>)
        })}
    </div>
};

export default DateTimeModal;