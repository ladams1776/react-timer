const FetchAllTasksRepository = require('../../../infrastructure/repositories/tasks/Repositories/FetchAllTasksRepository');
const FetchTaskByIdRepository = require('../../../infrastructure/repositories/tasks/Repositories/FetchTaskByIdRepository');
const UpdateDateTimeRepository = require('../../../infrastructure/repositories/tasks/Repositories/UpdateDateTimeRepository');

const TaskService = {
  fetchAllTasks: () => FetchAllTasksRepository(),
  fetchTaskById: (taskId) => FetchTaskByIdRepository(taskId),
  updateDateTimeOfTask: (taskId, dateTime) => UpdateDateTimeRepository(taskId, dateTime),
};

module.exports = TaskService;
