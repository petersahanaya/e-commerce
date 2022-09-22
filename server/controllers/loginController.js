const { User } = require('../model/User');
const JWT = require('jsonwebtoken');
require('dotenv').config();
const { validationResult } = require('express-validator')

const loginController = async (req, res) => {
    const { username, email, password } = req.body

    if(username && email && password){  
        const Find = await User.findOne({ where : { username } });

        const error = validationResult(req);

        if(!error.isEmpty()){
            return res.status(400).json({error : error.array()});
        };
        
        if(!Find){
            return res.status(400).json({error : "User Has Not Found Please Register..."})
        }

        JWT.sign({
            userId : Find.id,
            username : Find.username},
            process.env.TOKEN,
            {expiresIn : '30d'}
        );

        req.user = { username : Find.username, userId : Find.id }

        res.status(200).json({ success : `${Find.username} Has Been Login` })
    }else {
        return res.status(400).json({error : "Username, Email And Password Are Required..."})
    }
}

module.exports = loginController