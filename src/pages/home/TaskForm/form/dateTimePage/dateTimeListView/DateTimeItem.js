import React from 'react';
import moment from 'moment-timezone';
import styles from './DateTimeListView.module.css';

const myTimezone = "America/New_York";
const myDatetimeFormat = "YYYY-MM-DD hh:mm:ss a";

const DateTimeItem = ({ dateTime, setEditDateTime}) => {
    const myDatetimeString = moment(dateTime.date)
        .tz(myTimezone)
        .format(myDatetimeFormat);

    const onClick = () => {
        setEditDateTime({ id: dateTime.id, date: dateTime.date, minutes: dateTime.time })
    };

    return <div className={styles.content} key={dateTime.id + dateTime.time} onClick={onClick}>
        <input type="hidden" value={dateTime.id} name="id" />
        <div className={styles.date}>Date: {myDatetimeString}</div>
        <div className={styles.time}>Minutes: {dateTime.time}</div>
    </div>
};

export default DateTimeItem;