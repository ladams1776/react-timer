const FetchAllTasksRepository = require('../../../infrastructure/repositories/tasks/Repositories/FetchAllTasksRepository');
const TaskRepository = require('../../../infrastructure/repositories/tasks/TaskRepository');

const TaskService = {
  fetchAllTasks: () => FetchAllTasksRepository(),
  /**
   * @param {String} taskId
   */
  fetchTaskById: (taskId, callback) => TaskRepository.fetchTaskById(taskId, callback),
};

module.exports = TaskService;
