const mongoose, { Schema } = require('mongoose');

const ProjectSchema = new Schema({
    id: { type: Number, index: true },
    name: {
        type: String
    },
    description: {
        type: String,
        trim: true,
    }
});


module.exports = ProjectSchema;