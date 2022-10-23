const JWT = require("jsonwebtoken");
const User = require('../models/User');
const refreshTokenController = (req, res) => {
    const token = req.cookies.refreshToken;

    if(!token) return res.sendStatus(403);

    JWT.verify(token, process.env.REFRESH_TOKEN, async (err, decoded) => {
        if(err) return res.sendStatus(403);
        const find = await User.findOne( {where : {token : token}});

        if(!find) return res.sendStatus(401);
        const accessToken =  JWT.sign({username : decoded.username, userId : decoded.id}, process.env.ACCESS_TOKEN, { expiresIn : '10m' });

        res.json({ accessToken });
    });
}

module.exports = {refreshTokenController}