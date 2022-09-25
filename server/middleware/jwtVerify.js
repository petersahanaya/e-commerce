const JWT = require('jsonwebtoken');
require('dotenv').config();

const accessTokenVerify = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if(!authHeader) return res.sendStatus(403);

    const token = authHeader.split(' ')[1];

    JWT.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
        if(err) return res.sendStatus(403);
            req.user = decoded;
            next();
        });
};

module.exports = accessTokenVerify