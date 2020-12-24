import React from 'react';
import PropTypes from "prop-types";
import DateTimeItem from './DateTimeItem';
import styles from './DateTimeListView.module.css';

const DateTimeListView = ({ dateTimes, setEditDateTime }) => {

    return <div className={styles.grid}>
        {dateTimes?.map(dT => {
            if (dT?.id) {
                return <DateTimeItem
                    dateTime={dT}
                    key={dT.id + dT.time}
                    setEditDateTime={setEditDateTime} />
            }
        })}
    </div>
}

DateTimeListView.propTypes = {
    dateTimes: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string,
        date: PropTypes.string,
        time: PropTypes.string
    })),
    setEditDateTime: PropTypes.func.isRequired
}

export default DateTimeListView;
