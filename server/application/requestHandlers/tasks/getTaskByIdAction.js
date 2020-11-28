const TaskService = require('../../../domain/services/tasks/TaskService');
const apiResponse = require('../apiResponse');

module.exports = async (req, res) => {
  const response = apiResponse(res);
  const task = await TaskService.fetchTaskById(req.params.id);
  response(task);
};
