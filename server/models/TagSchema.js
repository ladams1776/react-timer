const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    id: { type: Number, index: true },
    name: {
        type: String
    },
    description: {
        type: String,
        trim: true,
    },
});


module.exports = TaskSchema;