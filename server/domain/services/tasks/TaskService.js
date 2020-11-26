const FetchAllTasksRepository = require('../../../infrastructure/repositories/tasks/Repositories/FetchAllTasksRepository');
const FetchTaskByIdRepository = require('../../../infrastructure/repositories/tasks/Repositories/FetchTaskByIdRepository/FetchTaskByIdRepository');
const UpdateDateTimeRepository = require('../../../infrastructure/repositories/tasks/Repositories/UpdateDateTimeRepository');
const UpdateTaskByIdRepository = require('../../../infrastructure/repositories/tasks/Repositories/UpdateTask/updateTask');
 
const TaskService = {
  fetchAllTasks: () => FetchAllTasksRepository(),
  fetchTaskById: (taskId) => FetchTaskByIdRepository(taskId),
  updateTask: (dto, res) => UpdateTaskByIdRepository(dto, res),
  updateDateTimeOfTask: (taskId, dateTime) => UpdateDateTimeRepository(taskId, dateTime),
};

module.exports = TaskService;
