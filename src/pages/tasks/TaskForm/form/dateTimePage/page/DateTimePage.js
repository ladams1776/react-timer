import React from 'react';
import PropTypes from 'prop-types';
import { displayMsInFractionalHourFormat } from 'utils';
import useTaskByIdSelector from 'redux/selectors/useTaskByIdSelector';
import DateTimeListView from '../dateTimeListView/DateTimeListView';
import EditDateTimeForm from '../EditDateTimeForm/EditDateTimeForm';
import useFetchTaskByIdDispatch from '../../../hooks/useFetchTaskById/useFetchTaskByIdDispatch';
import styles from './DateTimePage.module.css';
const DateTimePage = ({ taskId, setIsShowing }) => {
    const [editDateTime, setEditDateTime] = React.useState({});
    useFetchTaskByIdDispatch(taskId);
    const { dateTimes, time } = useTaskByIdSelector();
    const millisecondsInFractionalHourFormat = displayMsInFractionalHourFormat(time);

    return <div className={styles.childrenContent}>
        {
            !editDateTime?.id
                ? (<>
                    <DateTimeListView dateTimes={dateTimes} setEditDateTime={setEditDateTime} setIsShowing={setIsShowing} />
                    <div className={styles.dateTimeTotal}> Total: {millisecondsInFractionalHourFormat} hrs</div>
                </>)
                : (<EditDateTimeForm setEditDateTime={setEditDateTime} taskId={taskId} editDateTime={editDateTime} setIsShowing={setIsShowing} />)
        }
    </div>
};

DateTimePage.prototype = {
    // dateTimes: PropTypes.exact([{
    //     id: PropTypes.string,
    //     date: PropTypes.string,
    //     minutes: PropTypes.number
    // }]),
    taskId: PropTypes.string.isRequired,
    setIsShowing: PropTypes.func.isRequired,
}

export default DateTimePage;