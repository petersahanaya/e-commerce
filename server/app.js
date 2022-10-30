//IMPORT'S
const express = require('express');
const App = express();
require('dotenv').config();
const cors = require('cors');
const register = require('./routes/register');
const {sequelize} = require('./models/index.js')
const login = require("./routes/login");
const cookieParser = require('cookie-parser');
const accessTokenVerify = require('./middleware/jwtVerify');
const { refreshTokenController } = require('./controllers/refreshTokenController');
const profile = require('./routes/profile');
const fileUpload = require('express-fileupload');
const allowSize = require('./middleware/allowSize')
const getUserProfile = require('./routes/getUserProfile');
const StripeController = require('./routes/stripe');
const checkToken = require('./routes/checkToken')
//PORT
const PORT = process.env.PORT || 3001;

//MIDDLEWARE
App.use(express.json());
App.use(fileUpload());
App.use(cors());
App.use(express.urlencoded({extended : false}));
App.use(cookieParser());

//ENDPOINT
App.use('/register',register);
App.use('/login', login);
App.use('/profile', accessTokenVerify,allowSize,profile);
App.use('/user/profile', accessTokenVerify, getUserProfile)
App.get('/token', accessTokenVerify,refreshTokenController);
App.use('/stripe', accessTokenVerify, StripeController)
App.use('/token/check', accessTokenVerify, checkToken)

//SERVER & DATABASE RUN
sequelize.sync().then(() => {
    App.listen(PORT)
})
