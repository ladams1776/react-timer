import React from 'react';

const useTaskRefs = (tasks) => {
    return React.useMemo(() => tasks.reduce((acc, value) => {
        acc[value._id] = React.createRef();
        return acc;
    }, {}), [tasks]);
};

export default useTaskRefs;