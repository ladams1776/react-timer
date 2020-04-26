const Task = require('../../models/Task');
const hydrate = require('../../hydrators/hydrate');

const TaskRepository = {
    fetchAllTask: async () => await Task.find({}, hydrate),
    fetchTaskById: async taskId => await Task.findById(taskId, hydrate)
}

module.exports = TaskRepository;