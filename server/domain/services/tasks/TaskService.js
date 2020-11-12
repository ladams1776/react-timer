const FetchAllTasksRepository = require('../../../infrastructure/repositories/tasks/Repositories/FetchAllTasksRepository');
const FetchTaskByIdRepository = require('../../../infrastructure/repositories/tasks/Repositories/FetchTaskByIdRepository');

const TaskService = {
  fetchAllTasks: () => FetchAllTasksRepository(),
  /**
   * @param {String} taskId
   * @param {Function} callback
   */
  fetchTaskById: (taskId, callback) => FetchTaskByIdRepository(taskId, callback),
};

module.exports = TaskService;
