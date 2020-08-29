const TaskRepository = require('../../../infrastructure/repositories/tasks/TaskRepository');

const TaskService = {
  fetchAllTasks: () => TaskRepository.fetchAllTask(),
  fetchTaskById: (taskId, callback) => TaskRepository.fetchTaskById(taskId, callback),
};

module.exports = TaskService;
