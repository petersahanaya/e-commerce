const isImage = (req, res, next) => {
    const StateImage = {
        error : false,
        setError : function(value){this.error = value}
    }

    const files = req.files;

    Object.values(files).forEach((s) => {
        if(s.mimetype !== 'image/jpg' || s.mimetype !== 'image/png' || s.mimetype !== 'image/jpeg'){
            StateImage.setError(true)
        }
    });

    if(StateImage.error) return res.status(400).json({msg : "File Should Be Type Of PNG, JPG OR JPEG"})

    next();
}