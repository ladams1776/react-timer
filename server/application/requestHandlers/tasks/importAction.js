const Task = require("../../../infrastructure/models/Task");
//@TODO: Clean this up
module.exports = (req, res) => {
    [...req.body.WorkUnit[0].tasks.tasks].map(task => {
        let t = new Task();
        t.toObject();
        t.time = task.time;
        t.contractId = task.contractId;
        t.description = task.description;
        t.date = task.date;
        return t.save((err, task) => {
            if (err) throw err;
        });
    });

    res.jsonp({ ok: true });
};
