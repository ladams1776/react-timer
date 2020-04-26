const TaskRepository = require('../../../infrastructure/repositories/tasks/TaskRepository');

const TaskService = {
    fetchAllTasks: async () => await TaskRepository.fetchAllTask()
};


module.exports = TaskService;