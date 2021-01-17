const TaskService = require('../../../domain/services/tasks/TaskService');
const apiResponse = require('../apiResponse');
const { FETCH_TASK_BY_ID_RESPONSE } = require('../reduxTypes');

module.exports = async (req, res) => {
  const response = apiResponse(res, FETCH_TASK_BY_ID_RESPONSE);
  const task = await TaskService.fetchTaskById(req.params.id);
  response(task);
};
