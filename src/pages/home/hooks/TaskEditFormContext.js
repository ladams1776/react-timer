import React, { createContext, useState, useCallback } from 'react';
import useFormReducer from '../TaskForm/hooks/useFormReducer';

export const TaskEditFormContext = createContext({});

//@TODO: Move this over to CreateOrEditTaskPage area. No need for this to be on the global level
const TaskEditFormContextProvider = ({ children }) => {
    // Will need to move these pieces I think or find a better way of managing Form state.
    // const [taskId, setTaskId] = useState(-1);
    // const [task, setTask] = useState({});
    // const [tasks, setTasks] = useState([]);
    // const [description, setDescription] = useState('');
    // const [selectedProject, setSelectedProject] = useState(0);

    // // Get the data for the two drop downs
    // const projects = useFetchProjectOptions();

    // const setTaskIdCallback = useCallback(taskId => setTaskId(taskId), [setTaskId]);
    // const setTaskCallback = useCallback(task => setTask(task), [setTask]);
    // const setTasksCallback = useCallback(tasks => setTasks(tasks), [setTasks]);
    // const setDescriptionCallback = useCallback(description => setDescription(description), [setDescription]);
    // const setSelectedProjectCallback = useCallback(selectedProject => setSelectedProject(selectedProject), [setSelectedProject]);

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