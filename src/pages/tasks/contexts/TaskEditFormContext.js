import React, { createContext } from 'react';
import useFormReducer from '../TaskForm/hooks/useFormReducer';

export const TaskEditFormContext = createContext({});

const TaskEditFormContextProvider = ({ children }) => {
    const [
        state,
        onDateTimes,
    ] = useFormReducer();


    return <TaskEditFormContext.Provider value={{
        state,
        onDateTimes,
    }}>
        {children}
    </TaskEditFormContext.Provider>
}

export default TaskEditFormContextProvider;