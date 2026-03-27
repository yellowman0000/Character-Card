const mongoose = require('mongoose');

const ultramanSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageURL: String
});


module.exports = mongoose.model('Ultraman', ultramanSchema, 'ultramans');