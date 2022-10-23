const  {User}  = require('../models');
const JWT = require('jsonwebtoken');
require('dotenv').config();
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

const loginController = async (req, res) => {
    const { username, email, password } = req.body

    if(username && email && password){  
        const Find = await User.findOne( { where : { username } });

        const error = validationResult(req);

        if(!error.isEmpty()){
            return res.status(400).json({msg : error.array()});
        };
        
        if(!Find)   return res.status(400).json({msg : "User Has Not Found Please Register..."})

        const match = await bcrypt.compare(password, Find.password);

        if(!match) return res.status(403).json({msg : "Password DO not match.."})

        const accessToken = JWT.sign({
            userId : Find.id,
            username : Find.username
        },
            process.env.ACCESS_TOKEN,
            {expiresIn : '10m'}
        );

        const refreshToken = JWT.sign({
            userId : Find.id,
            username : Find.username
        },
            process.env.REFRESH_TOKEN,
            {expiresIn : '1d'}
        );
        
        await User.update({ token : refreshToken }, { 
            where : {id : Find.id} 
        });

        res.cookie('refreshToken',refreshToken, { httpOnly : true, maxAge : 24 * 60 * 60 * 1000 });

        res.status(200).json({ accessToken });

    }else {
        return res.status(400).json({msg : "Username, Email And Password Are Required..."})
    };
}

module.exports = loginController