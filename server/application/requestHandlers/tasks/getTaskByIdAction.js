const TaskService = require('../../../domain/services/tasks/TaskService');

module.exports = async (req, res) => {
  const task = await TaskService.fetchTaskById(req.params.id);
  res.jsonp(task);
};
