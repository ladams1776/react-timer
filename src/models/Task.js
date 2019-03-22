const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    date: {
        type: Date
    },
    WorkUnit: [
        {
            description: {
                type: String,
                maxlength: 254,
                trim: true,
                description: "must be a string and no greater than 254"
            },
            customer: {
                type: String,
                description: "must be a string and is required"
            },
            contract: {
                type: String,
                description: "must be a string is required"
            },
            time: {
                type: Number,
                description: "must be a int and it is in millisecond format"
            }
        }
    ]
});

module.exports = mongoose.model('Task', taskSchema);