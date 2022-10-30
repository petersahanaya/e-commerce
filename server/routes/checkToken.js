
const router = require('express').Router();

router.get('/', (req, res) => {
    if(!req['user']) return res.sendStatus(400);
    res.sendStatus(200);
})

module.exports = router