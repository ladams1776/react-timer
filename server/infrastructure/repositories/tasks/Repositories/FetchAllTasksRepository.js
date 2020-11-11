const Task = require('../../../models/Task');
const hydrate = require('../../../hydrators/hydrate');

module.exports = () => Task.find({}, hydrate);