const mongoose = require('mongoose');

const TrackSchema = mongoose.Schema({
    trackId: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true,
    },
    remark: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Track', TrackSchema);