//IMPORT'S
const express = require('express');
const App = express();
require('dotenv').config();
const cors = require('cors');
const bodyParser = require("body-parser");
const register = require('./routes/register');
const db = require('./models')
const login = require("./routes/login");
const cookieParser = require('cookie-parser');
const accessTokenVerify = require('./middleware/jwtVerify');
const users = require("./routes/users");
const { refreshTokenController } = require('./controllers/refreshTokenController');
const profile = require('./routes/profile');
const fileUpload = require('express-fileupload');const allowSize = require('./middleware/allowSize')
const isImage = require('./middleware/isImage')

//PORT
const PORT = process.env.PORT || 3001;

//MIDDLEWARE
App.use(bodyParser.json());
App.use(cors());
App.use(fileUpload());
App.use(bodyParser.urlencoded({extended : true}));
App.use(cookieParser());

//ENDPOINT
App.use('/register',register);
App.use('/login', login);
App.use('/profile', allowSize,profile);
App.use('/users', accessTokenVerify, users);
App.get('/token', accessTokenVerify,refreshTokenController);

//SERVER & DATABASE RUN
db.sequelize.sync().then(() => {
    App.listen(PORT, () => {
        console.log("Server Running At " + PORT);
    });
}).catch(err => {
    console.log(err.message, "ERROR GAN")
})