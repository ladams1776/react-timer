import { useContext } from 'react';
import { TaskEditFormContext } from './TaskEditFormContext';

const useTaskContext = () => useContext(TaskEditFormContext);

const useTaskEditContext = () => {
    const {
        taskId, updateTaskId: setTaskIdCallback,
        task, updateTask: setTaskCallback,
        tasks, updateTasks: setTasksCallback,
        description, updateDescription: setDescriptionCallback,
        selectedProject, updateDropDown: setSelectedProjectCallback, //@TODO: Change this key `updateDropdown`
        // tags,
        projects
    } = useTaskContext();

    return {
        taskId, updateTaskId: setTaskIdCallback,
        task, updateTask: setTaskCallback,
        tasks, updateTasks: setTasksCallback,
        description, updateDescription: setDescriptionCallback,
        selectedProject, updateDropDown: setSelectedProjectCallback, //@TODO: Change this key `updateDropdown`
        // tags,
        projects
    };
};

export default useTaskEditContext;
