import React, { useState } from 'react';
import PropTypes from "prop-types";
import cn from 'classnames';
import DateTimeModal from './DateTimeModal';

const DateTimeButton = ({ dateTime }) => {
    const [isShowing, setIsShowing] = useState(false);

    return <>
        <div className={cn("timeInfo", "glyphicon glyphicon-time")}
            onClick={() => setIsShowing(!isShowing)}></div>

        {isShowing
            ? (<DateTimeModal dateTime={dateTime} />)
            : []
        }
    </>
};

DateTimeButton.propTypes = {
    dateTime: PropTypes.arrayOf(Object),
}

export default DateTimeButton;