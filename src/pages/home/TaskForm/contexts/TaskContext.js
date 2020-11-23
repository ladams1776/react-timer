import React, { useState, createContext, useCallback } from 'react';

export const TaskContext = createContext();
export const TaskContextAction = createContext();

const TaskContextProvider = ({ children }) => {
    const [tasks, setTs] = useState([]);
    const setTasks = useCallback(tasks => setTs(tasks), [setTs]);

    return <TaskContext.Provider value={tasks}>
        <TaskActionContext.Provider value={setTasks}>
            {children}
        </TaskActionContext.Provider>
    </TaskContext.Provider>
}

export default TaskContextProvider;