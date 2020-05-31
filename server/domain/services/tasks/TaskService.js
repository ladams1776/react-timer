const TaskRepository = require('../../../infrastructure/repositories/tasks/TaskRepository');

const TaskService = {
  fetchAllTasks: () => TaskRepository.fetchAllTask(),
  fetchTaskById: taskId => TaskRepository.fetchTaskById(taskId),
};

module.exports = TaskService;
