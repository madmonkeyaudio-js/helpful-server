const router = require('express').Router();


router.get('/', (req, res) => {
    res.send('Here are all your colors!')
})


module.exports = router;