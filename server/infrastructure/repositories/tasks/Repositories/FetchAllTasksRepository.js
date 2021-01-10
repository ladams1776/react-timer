const Task = require('../../../models/Task');
const hydrate = require('../../../hydrators/hydrate');
const EntityToDto = require('./FetchTaskByIdRepository/EntityToDto');

module.exports = () => Task.find({}, hydrateTask);

const hydrateTask = (err, doc) => {
    const tasks = hydrate(err,doc);

    const dtos = tasks.map(task => EntityToDto(task));
    return dtos;
}