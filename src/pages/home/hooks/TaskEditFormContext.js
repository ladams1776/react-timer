import React, { createContext, useState, useCallback } from 'react';
import { useFetchProjectOptions } from 'hooks';

export const TaskEditFormContext = createContext({});

//@TODO: Move this over to CreateOrEditTaskPage area. No need for this to be on the global level
const TaskEditFormContextProvider = ({ children }) => {
    // Will need to move these pieces I think or find a better way of managing Form state.
    const [taskId, setTaskId] = useState(-1);
    const [task, setTask] = useState({});
    const [tasks, setTasks] = useState([]);
    const [description, setDescription] = useState('');
    const [selectedProject, setSelectedProject] = useState(0);

    // Get the data for the two drop downs
    const projects = useFetchProjectOptions();

    const setTaskIdCallback = useCallback(taskId => setTaskId(taskId), [setTaskId]);
    const setTaskCallback = useCallback(task => setTask(task), [setTask]);
    const setTasksCallback = useCallback(tasks => setTasks(tasks), [setTasks]);
    const setDescriptionCallback = useCallback(description => setDescription(description), [setDescription]);
    const setSelectedProjectCallback = useCallback(selectedProject => setSelectedProject(selectedProject), [setSelectedProject]);

    return <TaskEditFormContext.Provider value={{
        taskId, updateTaskId: setTaskIdCallback,
        task, updateTask: setTaskCallback,
        tasks, updateTasks: setTasksCallback,
        description, updateDescription: setDescriptionCallback,
        selectedProject, updateDropDown: setSelectedProjectCallback, //@TODO: Change this key `updateDropdown`
        // tags,
        projects
    }}>
        {children}
    </TaskEditFormContext.Provider >
}

export default TaskEditFormContextProvider;