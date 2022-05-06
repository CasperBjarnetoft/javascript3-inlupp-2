const mongoose = require('mongoose');

const productSchema = mongoose.Schema({

    title:       { type: String, required: true },
    description: { type: String, required: true },
    date:        { type: String, required: true },
    time:        { type: String, required: true }
    
}, { timestamps: true })

module.exports = mongoose.model('Event', productSchema)