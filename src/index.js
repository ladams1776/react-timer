import React from 'react';
import ReactDOM from 'react-dom';
import EditTaskForm from './Form/EditTask/EditTaskForm';
import TaskListForm from './Form/TaskList/TaskListForm';




const list = require('./resources/dropdownDefinition.json');

// ========================================

ReactDOM.render(
    // <Form list={JSON.parse('../resources/dropdownDefinition.js')}/>,
    // <EditTaskForm list={list} />,
    <TaskListForm />,
    document.getElementById('root')
);