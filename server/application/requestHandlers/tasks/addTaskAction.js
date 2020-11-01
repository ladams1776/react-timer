// const TagService = require('../../../domain/services/tags/TagService');
// const jsonResponse = require('../jsonResponse');
const Task = require('../../../infrastructure/models/Task');

module.exports = async (req, res) => {
    const m = new Task();
    m.toObject();
    m.date = req.body.date;
    m.description = req.body.WorkUnit[0].description;
    m.contractId = req.body.WorkUnit[0].contractId;

    m.time = [{
        time: req.body.WorkUnit[0].time,
        date: req.body.date
    }];
    m.tags = req.body.WorkUnit[0].tags;

    const t = await m.save((err, task) => {
        if (err) throw err;
    });
    res.jsonp(m);
};
