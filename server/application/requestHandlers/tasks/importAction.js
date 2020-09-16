const { json } = require("body-parser");
const Task = require("../../../infrastructure/models/Task");

module.exports = (req, res) => {
    const file = JSON.parse(req.files.file.data);
    const tasks = file.WorkUnit[0].tasks;
    console.log('hey: ', [...tasks.tasks]);

    [...tasks.tasks].map(task => {
        let t = new Task();
        t.toObject();
        t.time = {
            time: task.time,
            date: task.date
        };
        t.contractId = task.contractId;
        t.description = task.description;
        t.date = task.date;
        return t.save((err, task) => {
            if (err) throw err;
        });
    });
    // const t = await m.save((err, task) => {
    //     if (err) throw err;
    // });
    res.jsonp({ ok: true });
};
