const bcrypt = require('bcrypt');
const { validationResult } = require("express-validator");
const  {User}  = require('../models')

const registerController = async (req, res) => {
    const { username, email, password } = req.body;

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({msg : errors.array()})
    }

        const duplicate = await User.findOne({
            where : {
            username : username
            }
        })

        if(duplicate){
            return res.status(400).json({msg : "Someone is already use this username..."})
        }

        const hashPassword = await bcrypt.hash(password, 10);
        
        try {
            await User.create({
                username,
                email,
                password : hashPassword,
            });
            res.status(200).json({success : "User Has Being Added.."});
        }catch(err){
            console.log(err)
        }
}

module.exports = registerController