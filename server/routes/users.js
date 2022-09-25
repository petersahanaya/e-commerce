const router = require("express").Router();
const { User } = require('../model/User');

router.get('/', async (req, res) => {
    try {
        const users = await User.findAll({attributes : ['username', 'email']})
        res.json({users});
    }catch(err){
        console.log("Error Cannot Get Users");
    };
})

module.exports = router;