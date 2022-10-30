const router = require('express').Router();
const {User} = require('../models/index.js')

router.get('/', async (req, res) => {
    const user = await User.findOne({where : {username : req.user.username}});

    if(!user) return res.status(400).json({status : 400, message : "Cannot Found User..."})

    return res.json({user});
})

module.exports = router