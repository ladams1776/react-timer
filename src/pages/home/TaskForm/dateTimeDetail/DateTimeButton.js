import React, { useState } from 'react';
import PropTypes from "prop-types";
import cn from 'classnames';
import DateTimeModal from './DateTimeModal';
import styles from './DateTimeButton.module.css';

const DateTimeButton = ({ dateTime }) => {
    const [isShowing, setIsShowing] = useState(false);

    return <>
        <button className={cn(styles.dateTimeButton, "glyphicon glyphicon-time")}
            onClick={() => setIsShowing(!isShowing)}></button>


        {isShowing
            ? (<DateTimeModal dateTime={dateTime} setIsShowing={setIsShowing} />)
            : []
        }
    </>
};

DateTimeButton.propTypes = {
    dateTime: PropTypes.arrayOf(Object),
}

export default DateTimeButton;