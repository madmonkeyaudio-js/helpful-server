require('dotenv').config();
let mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/helpfulHuman', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
})

module.exports.Color = require('./color');