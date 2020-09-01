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

// /**
//  * Take in a regular date and format it into a more readable format:
//  *
//  * @param {Date} taskDate: 2019-11-17T17:38:50.575Z
//  * @returns 11/17/2019
//  */
// export default function getFormattedDate() {
//     const existingDate = new Date();
//     const dateFormatted =
//         existingDate.getMonth() +
//         1 +
//         '/' +
//         existingDate.getDate().toString() +
//         '/' +
//         existingDate.getFullYear().toString();
//     return dateFormatted;
// }

