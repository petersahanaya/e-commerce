const {Profile}  = require('../models');

const profileController = (req, res) => {
    const imageState = {
        image : '',
        setImage : function(value){this.image = value}
    };

    const files = req.files;
    const { description, status } = req.body;

    Object.values(files).forEach(s => {
        const base64 = s?.data?.toString('base64');
        imageState.setImage(`data:${s.mimetype};base64,${base64}`);
    });

    Profile.create({photo : imageState.image, description, status});

    res.json({success : "Profile Was Created..."})
}       

module.exports = profileController