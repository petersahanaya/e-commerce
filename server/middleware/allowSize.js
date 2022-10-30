
const allowSize = (req, res, next) => {
    let img;

    const MIN_MB = 3 * 1024 * 1024
    const files = req.files;

    if(!files) return res.sendStatus(400)

    Object.keys(files).forEach(file => {
        img = files[file].size
    })


    if(img > MIN_MB){
        res.status(400).json({msg : "File Should Less Than 3MB"})
    }

    next();
}

module.exports = allowSize