import React, { useState } from 'react';
import PropTypes from "prop-types";
import cn from 'classnames';
import { Modal } from 'components';
import DateTimePage from './page/DateTimePage';
import styles from './DateTimeButton.module.css';

const DateTimeButton = ({ taskId }) => {
    const [isShowing, setIsShowing] = useState(false);

    return <>
        <button className={cn(styles.dateTimeButton, "glyphicon glyphicon-time")}
            onClick={() => setIsShowing(!isShowing)}></button>

        {isShowing
            ? (<Modal setIsShowing={setIsShowing}>
                <DateTimePage taskId={taskId} setIsShowing={setIsShowing} />
            </Modal>)
            : []
        }
    </>
};

DateTimeButton.propTypes = {
    dateTimes: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string,
        date: PropTypes.string,
        time: PropTypes.string
    })),
    taskId: PropTypes.string
}

export default DateTimeButton;