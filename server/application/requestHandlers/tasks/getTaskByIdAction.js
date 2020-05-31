const TaskService = require('../../../domain/services/tasks/TaskService');

module.exports = async (req, res) => {
  const tasks = await TaskService.fetchTaskById(req.params.id);
  res.jsonp(tasks);
};
