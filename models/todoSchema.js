const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },

    complete: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('todos', todoSchema);

