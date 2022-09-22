const bcrypt = require('bcrypt');
const { validationResult } = require("express-validator");
const { User } = require('../model/User')

const registerController = async (req, res) => {
    const { username, email, password } = req.body;

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error : errors.array()})
    }

        const duplicate = await User.findOne({
            where : {
            username : username
            }
        })

        if(duplicate){
            return res.status(400).json({error : "Someone is already use this username..."})
        }

        const hashPassword = await bcrypt.hash(password, 10);

        User.create({
            username,
            email,
            password : hashPassword,
        })

        res.json({success : "User Has Being Added.."})
}

module.exports = registerController