import React, { createContext } from 'react';
import useFormReducer from '../TaskForm/hooks/useFormReducer';

export const TaskEditFormContext = createContext({});

const TaskEditFormContextProvider = ({ children }) => {
    const [
        state,
        dispatch,
        onProjectDropDownChange,
        onTextAreaChange,
        onTagChange
    ] = useFormReducer();


    return <TaskEditFormContext.Provider value={{
        state,
        dispatch,
        onProjectDropDownChange,
        onTextAreaChange,
        onTagChange
    }}>
        {children}
    </TaskEditFormContext.Provider>
}

export default TaskEditFormContextProvider;