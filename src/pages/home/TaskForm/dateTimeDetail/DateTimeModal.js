import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import useTaskEditContext from '../../hooks/useTaskEditContext';
import EditDateTimeForm from './EditDateTimeForm/EditDateTimeForm';
import styles from './DateTimeModal.module.css';

const DateTimeModal = ({ setIsShowing }) => {
    const { state } = useTaskEditContext();
    const dateTimes = state.dateTimes;
    const [editDateTime, setEditDateTime] = useState({});

    const myTimezone = "America/New_York";
    const myDatetimeFormat = "YYYY-MM-DD hh:mm:ss a";

    return <div className={styles.modal}>
        <div className={styles.modalContent}>
            {!editDateTime?.id
                ? (dateTimes.map(dT => {

                    //@TODO: abstract this stuff out
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
                }))
                : []
            }

            <button className={styles.closeButton} onClick={() => setIsShowing(false)}>Close</button>
        </div>
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