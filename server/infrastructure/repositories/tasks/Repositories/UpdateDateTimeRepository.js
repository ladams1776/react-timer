const Task = require('../../../models/Task');
const hydrate = require('../../../hydrators/hydrate');
const minutesToMilliseconds = require('../../../../utils/minutesToMilliseconds');

module.exports = async (taskId, dateTime) => {
    const task = await Task.findOne({ _id: taskId });

    const dateTimes = task.time.map(dT => {
        if (dT._id == dateTime.id) {
            console.log('the same')
            return {
                _id: dT._id,
                date: dateTime.date,
                time: minutesToMilliseconds(dateTime.minutes),
            };
        } else {
            return dT;
        }
    });

    task.time = dateTimes;
    return await task.save(hydrate)
};