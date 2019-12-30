const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
    id: { type: Number, index: true },
    date: {
        type: Date
    },
    description: {
        type: String,
        maxlength: 254,
        trim: true,
    },
    contractId: {
        type: Number,
    },
    time: { type: Number }
});


module.exports = TaskSchema;