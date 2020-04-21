const mongoose, { Schema } = require('mongoose');


const TaskSchema = new Schema({
    id: { type: Number, index: true },
    date: {
        type: Date
    },
    description: {
        type: String,
        trim: true,
    },
    contractId: {
        type: Number,
    },
    time: { type: Number }
});


module.exports = TaskSchema;