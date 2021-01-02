import { useContext } from 'react';
import { TaskEditFormContext } from 'pages/tasks/contexts/TaskEditFormContext';

const useTaskContext = () => useContext(TaskEditFormContext);

const useTaskEditContext = () => {
    const {
        state,
        onDateTimes,
        onIdChange,
    } = useTaskContext();

    return {
        state,
        onDateTimes,
        onIdChange,
    };
};

export default useTaskEditContext;
