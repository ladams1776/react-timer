import React, { createContext } from 'react';
import useFormReducer from '../TaskForm/hooks/useFormReducer';

export const TaskEditFormContext = createContext({});

const TaskEditFormContextProvider = ({ children }) => {
    const [
        state,
        onProjectDropDownChange,
        onTextAreaChange,
        onTagChange,
        
        onDateTimes,
        dispatchTask
    ] = useFormReducer();


    return <TaskEditFormContext.Provider value={{
        state,
        onProjectDropDownChange,
        onTextAreaChange,
        onTagChange,

        onDateTimes,
        dispatchTask
    }}>
        {children}
    </TaskEditFormContext.Provider>
}

export default TaskEditFormContextProvider;