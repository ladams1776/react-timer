const TaskService = require('../../../domain/services/tasks/TaskService');

module.exports = (req, res) => {
  const ya = doc => res.jsonp(doc);
  const tasks = TaskService.fetchTaskById(req.params.id, ya);
};
