const Task = require('../../models/Task');
const hydrate = require('../../hydrators/hydrate');

const TaskRepository = {
  fetchAllTask: () => Task.find({}, hydrate),
  fetchTaskById: async (taskId, callback) => {
    if (taskId == undefined) {
      callback('');
    } else {
      const doc = await Task.findById(taskId);
      const task = {};
      task._id = doc?._id;
      task.description = doc.description;
      task.tags = doc.tags;
      task.date = doc.date;
      task.contractId = doc.contractId || '';

      task.time = doc.time
        .map(a => parseInt(a.time))
        .reduce((a, b) => a + b);

      callback(task);
    }
  },
};

module.exports = TaskRepository;
