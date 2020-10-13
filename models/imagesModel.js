const mongoose = require('mongoose');

const imagesSchema = mongoose.Schema({
    photos: {
        type: String
    }
}, {timestamps: true});

module.exports = mongoose.model('photo', imagesSchema);