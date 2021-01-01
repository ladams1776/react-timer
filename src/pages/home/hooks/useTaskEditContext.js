import { useContext } from 'react';
import { TaskEditFormContext } from 'pages/home/contexts/TaskEditFormContext';

const useTaskContext = () => useContext(TaskEditFormContext);

const useTaskEditContext = () => {
    const {
        state,
        dispatch,
        onDateTimes,
        onIdChange,
        dispatchTask
    } = useTaskContext();

    return {
        state,
        dispatch,
        onDateTimes,
        onIdChange,
        dispatchTask
    };
};

export default useTaskEditContext;
