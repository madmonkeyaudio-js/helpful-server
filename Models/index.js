require('dotenv').config();
let mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/helpfulHuman', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
})

mongoose.connection.on('error', () => {
    console.log('MongoDB Connection Error, please make sure MongoDB is running');
    process.exit(1)
})

module.exports.Color = require('./color');