import React from 'react';

const useDateTimeState = () => {
    const [editDateTime, setEditDateTime] = React.useState({});
    return { editDateTime, setEditDateTime };
}

export default useDateTimeState;