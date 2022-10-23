
const allowSize = (req, res, next) => {
    const StateImg = {
        image : null,
        setImage : function(value){this.image = value}
    };

    const MIN_MB = 3 * 1024 * 1024
    const files = req.files;

    Object.values(files).forEach((s) => {
        StateImg.image(s.size)
    });

    if(StateImg.image > MIN_MB){
            res.status(400).json({msg : "File Should Less Than 3MB"})
    }

    next();
}

module.exports = allowSize