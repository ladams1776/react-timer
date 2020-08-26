const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
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
    time: [],
    tags: []
});

const Task = mongoose.model("tasks", TaskSchema);

module.exports = Task;