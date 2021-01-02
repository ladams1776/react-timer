import React from 'react';
import PropTypes from 'prop-types';
import useDateTimeState from './useDateTimeState';
import DateTimeListView from '../dateTimeListView/DateTimeListView';
import EditDateTimeForm from '../EditDateTimeForm/EditDateTimeForm';
import useFetchTaskByIdTransition from '../../../hooks/useFetchTaskById/useFetchTaskByIdTransition';
import useTaskByIdSelector from '../../../../../../redux/selectors/useTaskByIdSelector';

const DateTimePage = ({ taskId, setIsShowing }) => {
    const { editDateTime, setEditDateTime } = useDateTimeState();
    useFetchTaskByIdTransition(taskId);
    const task = useTaskByIdSelector();
    const { dateTimes } = task;
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