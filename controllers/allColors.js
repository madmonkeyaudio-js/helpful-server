const router = require('express').Router();
const db = require('../Models')

router.get('/', (req, res) => {
    db.Color.find()
    .then(response => {
        res.send(response)
    })
    .catch(err => {
        console.log('Error locating colors', err)
    })
})

module.exports = router;