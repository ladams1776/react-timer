const TaskService = require('../../../domain/services/tasks/TaskService');

module.exports = async (req, res) => {
    console.log('Request Handler hit')
    const tasks = await TaskService.fetchAllTasks();
    res.jsonp(tasks);
};

