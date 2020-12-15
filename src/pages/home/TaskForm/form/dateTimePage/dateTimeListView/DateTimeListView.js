import React from 'react';
import DateTimeItem from './DateTimeItem';
import styles from './DateTimeListView.module.css';

const DateTimeListView = ({ dateTimes, setEditDateTime }) => {

    return <div className={styles.grid}>
        {dateTimes?.map(dT => {
            return <DateTimeItem dateTime={dT} key={dT.id + dT.time} setEditDateTime={setEditDateTime} />
        })}
    </div>
}

export default DateTimeListView;