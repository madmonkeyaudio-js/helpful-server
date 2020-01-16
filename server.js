const express = require('express');
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json({ limit: '10mb'}))


app.listen(process.env.PORT, () => {
    console.log(`You are listening to the sweet sounds of ${process.env.PORT}`);
})

module.exports = app;