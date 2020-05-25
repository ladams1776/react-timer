const Task = require('../../models/Task');
const hydrate = require('../../hydrators/hydrate');

const TaskRepository = {
  fetchAllTask: () => Task.find({}, hydrate),
  fetchTaskById: taskId => Task.findById(taskId, hydrate),
};

module.exports = TaskRepository;
