import React from 'react';
import PropTypes from 'prop-types';
import useDateTimeState from './useDateTimeState';
import useFetchTaskById from './useFetchTaskById'
import DateTimeListView from '../dateTimeListView/DateTimeListView';
import EditDateTimeForm from '../EditDateTimeForm/EditDateTimeForm';

const DateTimePage = ({ taskId, setIsShowing }) => {
    const { dateTimes, setDateTimes, editDateTime, setEditDateTime } = useDateTimeState();
    useFetchTaskById(taskId, setDateTimes);

    return <div className="childrenContent">
        {
            !editDateTime?.id
                ? (<DateTimeListView dateTimes={dateTimes} setEditDateTime={setEditDateTime} setIsShowing={setIsShowing} />)
                : (<EditDateTimeForm setEditDateTime={setEditDateTime} taskId={taskId} editDateTime={editDateTime} setIsShowing={setIsShowing}/>)
        }
    </div>
};

DateTimePage.prototype = {
    dateTimes: PropTypes.exact([{
        id: PropTypes.string,
        date: PropTypes.string,
        minutes: PropTypes.number
    }]),
    setIsShowing: PropTypes.func,
}

export default DateTimePage;