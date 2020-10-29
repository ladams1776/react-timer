const Task = require("../../../infrastructure/models/Task");
const TagService = require("../../../domain/services/tags/TagService");

//@TODO: Clean this up
module.exports = (req, res) => {
    console.log('yum yum');
    [...req.body.WorkUnit[0].tasks.tasks].map(task => {
        console.log('task is: ', task?.tags);

        
        task?.tags.map(tag => {
            const getTag = (items) => items.items;
            const storedTag = TagService.fetchTagById(tag._id, getTag);
            if (storedTag.error) TagService.addTag(tag, getTag);
        });

        let saveableTask = new Task();
        saveableTask.toObject();
        saveableTask.time = task.time;
        saveableTask.contractId = task.contractId;
        saveableTask.description = task.description;
        saveableTask.date = task.date;
        saveableTask.tags = task.tags;
        return saveableTask.save((err, task) => {
            if (err) throw err;
        });
    });

    res.jsonp({ ok: true });
};
