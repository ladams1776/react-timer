const Task = require('../../../infrastructure/models/Task');

module.exports = (req, res) => {
    console.log('Updating a task with: ', req.body);
    // eslint-disable-next-line no-underscore-dangle
    Task.findOne({ _id: req.body._id }, (err, doc) => {

        const existingTime = doc?.time
            .map(time => parseInt(time.time))
            .reduce((a, b) => a + b);

            
        console.log('existing time');
        const timeOffset = parseInt(req.body.WorkUnit[0].time) - existingTime;

        console.log('the new time: ', timeOffset);

        if (timeOffset > 0) {
            doc.time = [
                ...doc.time,
                { date: req.body.date, time: timeOffset }
            ];
        }

        doc.description = req.body.WorkUnit[0]?.description;
        doc.date = req.body.date;
        doc.contractId = req.body.WorkUnit[0]?.contractId;
        doc.tags = req.body.WorkUnit[0]?.tags;

        doc.save(err => {
            if (err) console.log('shit, an error: ', err);
        });

        res.jsonp({ _id: req.body._id })
    });
}