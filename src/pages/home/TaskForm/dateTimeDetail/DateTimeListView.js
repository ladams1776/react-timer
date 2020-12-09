import React from 'react';
import moment from 'moment-timezone';
import styles from './DateTimeListView.module.css';

const DateTimeListView = ({ dateTimes, setEditDateTime, setIsShowing }) => {
    const myTimezone = "America/New_York";
    const myDatetimeFormat = "YYYY-MM-DD hh:mm:ss a";

    return <div className={styles.modalContent}>
        <div className={styles.grid}>
            {dateTimes?.map(dT => {

                const myDatetimeString = moment(dT.date)
                    .tz(myTimezone)
                    .format(myDatetimeFormat);

                const onClick = () => {
                    setEditDateTime({ id: dT.id, date: dT.date, minutes: dT.time })
                };

                return <div className={styles.content} key={dT.id + dT.time} onClick={onClick}>
                    <input type="hidden" value={dT.id} name="id" />
                    <div className={styles.date}>Date: {myDatetimeString}</div>
                    <div className={styles.time}>Minutes: {dT.time}</div>
                </div>
            })}
        </div>
    </div>
}

export default DateTimeListView;