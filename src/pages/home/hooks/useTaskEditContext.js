import { useContext } from 'react';
import { TaskEditFormContext } from 'pages/home/contexts/TaskEditFormContext';

const useTaskContext = () => useContext(TaskEditFormContext);

const useTaskEditContext = () => {
    const {
        state,
        dispatch,
        onProjectDropDownChange,
        onTextAreaChange,
        onTagChange,
        onDateTimes,
        onIdChange,
        dispatchTask
    } = useTaskContext();

    return {
        state,
        dispatch,
        onProjectDropDownChange,
        onTextAreaChange,
        onTagChange,
        onDateTimes,
        onIdChange,
        dispatchTask
    };
};

export default useTaskEditContext;
