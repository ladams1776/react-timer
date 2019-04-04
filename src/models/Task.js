const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    date: {
        type: Date
    },
    description: {
        type: String,
        maxlength: 254,
        trim: true,
        description: "must be a string and no greater than 254"
    },
    contractId: {
        type: Number,
        description: "must be a integer"
    },            
    time: {
        type: Number,
        description: "must be a int and it is in millisecond format"
    }
});

module.exports = taskSchema;