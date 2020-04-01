import { createContext } from 'react';

const TaskEditFormContext = createContext({});

export const TaskEditFormProvider = TaskEditFormContext.Provider;

export default TaskEditFormContext;
