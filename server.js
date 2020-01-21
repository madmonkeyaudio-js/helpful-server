const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json({ limit: '10mb'}))

app.use('/allColors', require('./controllers/allColors'))

app.listen(process.env.PORT || 7066, () => {
    console.log(`You are listening to the sweet sounds of server`);
})

app.get('/', (req, res) => {
    res.send('Hello there')
})

module.exports = app;