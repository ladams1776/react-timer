import React from 'react';

const TaskEditFormContext = React.createContext({});

export const TaskEditFormProvider = TaskEditFormContext.Provider;
export const TaskEditFormConsumer = TaskEditFormContext.Consumer;

export default TaskEditFormContext;
