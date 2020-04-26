const TaskRepository = require('../../../infrastructure/repositories/tasks/TaskRepository');

const TaskService = {
    fetchAllTasks: async () => await TaskRepository.fetchAllTask(),
    fetchTaskById: async taskId => await TaskRepository.fetchTaskById(taskId)
};


module.exports = TaskService;