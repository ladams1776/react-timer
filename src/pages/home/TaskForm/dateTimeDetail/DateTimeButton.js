import React, { useState } from 'react';
import PropTypes from "prop-types";
import cn from 'classnames';
import DateTimeModal from './DateTimeModal';
import styles from './DateTimeButton.module.css';

const DateTimeButton = ({ dateTimes, taskId }) => {
    const [isShowing, setIsShowing] = useState(false);

    return <>
        <button className={cn(styles.dateTimeButton, "glyphicon glyphicon-time")}
            onClick={() => setIsShowing(!isShowing)}></button>


        {isShowing
            ? (<DateTimeModal dateTimes={dateTimes} taskId={taskId} setIsShowing={setIsShowing} />)
            : []
        }
    </>
};

DateTimeButton.propTypes = {
    dateTimes: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string,
        date: PropTypes.string,
        time: PropTypes.number
    })),
    taskId: PropTypes.string
}

export default DateTimeButton;