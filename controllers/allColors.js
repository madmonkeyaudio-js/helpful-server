const router = require('express').Router();
const db = require('../Models')

router.get('/', (req, res) => {
    res.send('Here are all your colors!')
})

module.exports = router;