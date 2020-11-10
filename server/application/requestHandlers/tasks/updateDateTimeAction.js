const Task = require('../../../infrastructure/models/Task');
const hydrateAndResponse = require('../../../infrastructure/hydrators/hydrateAndResponse');
const jsonResponse = require('../jsonResponse');
const minutesToMilliseconds = require('../../../utils/minutesToMilliseconds');


module.exports = async (req, res) => {
    const responder = jsonResponse(res);
    const hydrate = hydrateAndResponse(responder);
    console.log('Updating a DateTime');
    const taskId = req.params.taskId;
    const dateTime = req.body;

    const task = await Task.findOne({ _id: taskId });

    const dateTimes = task.time.map(dT => {
        if (dT._id == dateTime.id) {
            console.log('dateTime is: ', dateTime)
            const newDateTime =  {
                _id: dT._id,
                date: dateTime.date,
                time: minutesToMilliseconds(dateTime.minutes),
            };

            console.log('newDateTime: ', newDateTime);
            return newDateTime;
        } else {
            return dT;
        }
    });

    task.time = dateTimes;
    await task.save(hydrate)

    // User.update({ email: 'joe@foo.com' }, { 'profile.name.first': 'Joseph' }, callback)
    // Task.update({_id: req.body.id})
};