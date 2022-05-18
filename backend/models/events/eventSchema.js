const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    user:       { type: mongoose.Schema.Types.ObjectId },
    title:       { type: String, required: true },
    description: { type: String, required: true },
    date:        { type: String, required: true },

}, { timestamps: true })

module.exports = mongoose.model('Event', productSchema)