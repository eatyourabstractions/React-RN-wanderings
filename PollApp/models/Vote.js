const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoteSchema = new Schema({
    choice: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: true
    }
});

const Vote = mongoose.model('Vote', VoteSchema);

module.exports = Vote;