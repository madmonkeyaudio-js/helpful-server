let mongoose = require('mongoose');

let colorSchema = new mongoose.Schema({
    color: String,
    hexId: String
})

module.exports = mongoose.model('Color', colorSchema);