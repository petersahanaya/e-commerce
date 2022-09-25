//IMPORT'S
const express = require('express');
const App = express();
require('dotenv').config();
const cors = require('cors');
const bodyParser = require("body-parser");
const register = require('./routes/register');
const { sequel } = require("./model/User");
const login = require("./routes/login");
const cookieParser = require('cookie-parser');
const accessTokenVerify = require('./middleware/jwtVerify');
const users = require("./routes/users");
const { refreshTokenController } = require('./controllers/refreshTokenController');

//PORT
const PORT = process.env.PORT || 3001;

//MIDDLEWARE
App.use(bodyParser.json());
App.use(cors());
App.use(bodyParser.urlencoded({extended : true}));
App.use(cookieParser());

//ENDPOINT
App.use('/register',register);
App.use('/login', login);
App.use('/users', accessTokenVerify, users);
App.get('/token', accessTokenVerify ,refreshTokenController);

//SERVER & DATABASE RUN
sequel.sync().then(() => {
    App.listen(PORT, () => {
        console.log('Database Connected..')
        console.log("Server Running At " + PORT);
    });
}).catch(err => {
    console.log('Failed To Connect...')
});