// const TagService = require('../../../domain/services/tags/TagService');
// const jsonResponse = require('../jsonResponse');
const Task = require('../../../infrastructure/models/Task');

module.exports = async (req, res) => {
    const m = new Task();
    m.toObject();
    m.date = '';
    m.description = '';
    m.contractId = '';

    const t = await m.save((err, task) => {
        if (err) throw err;
    });
    res.jsonp(m);
};
