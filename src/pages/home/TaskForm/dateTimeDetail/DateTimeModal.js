import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useFetchTaskById from './useFetchTaskById'
import DateTimeListView from './DateTimeListView';
import EditDateTimeForm from './EditDateTimeForm/EditDateTimeForm';
import styles from './DateTimeModal.module.css';
const DateTimeModal = ({ taskId, setIsShowing }) => {
    const [dateTimes, setDateTimes] = useState([]);
    const [editDateTime, setEditDateTime] = useState({});
    useFetchTaskById(taskId, setDateTimes);

    return <div className={styles.modal}>
        {
            !editDateTime?.id
                ? (<DateTimeListView dateTimes={dateTimes} setEditDateTime={setEditDateTime} setIsShowing={setIsShowing} />)
                : (<EditDateTimeForm setEditDateTime={setEditDateTime} taskId={taskId} editDateTime={editDateTime} />)
        }
        <button className={styles.closeButton} onClick={() => setIsShowing(false)}>X</button>
    </div>
};

DateTimeModal.prototype = {
    dateTimes: PropTypes.exact([{
        id: PropTypes.string,
        date: PropTypes.string,
        minutes: PropTypes.number
    }]),
    setIsShowing: PropTypes.func,
}

export default DateTimeModal;