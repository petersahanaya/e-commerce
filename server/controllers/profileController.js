const { User }  = require('../models/index.js');

const profileController = async (req, res) => {
    let img;

    const files = req.files;

    if(!files) return res.sendStatus(400);

    Object.keys(files).forEach(file => {
        const base64 = files[file].data.toString('base64');
        img = `data:${files[file].mimetype};base64,${base64}`;
    })

    if(!img) return ""

    await User.update({profile : img}, {where : {username : req.user.username}})

    res.sendStatus(200)
}       

module.exports = profileController