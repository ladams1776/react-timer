import React from 'react';

const useDateTimeState = () => {
    const [dateTimes, setDateTimes] = React.useState([]);
    const [editDateTime, setEditDateTime] = React.useState({});
    return {dateTimes, setDateTimes, editDateTime, setEditDateTime};
}

export default useDateTimeState;