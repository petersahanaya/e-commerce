//IMPORT'S
const express = require('express');
const App = express();
require('dotenv').config();
const cors = require('cors');
const bodyParser = require("body-parser");
const register = require('./routes/register');
const { sequel } = require("./model/User")
const login = require("./routes/login")

//PORT
const PORT = process.env.PORT || 3001;

const corsOption = {
    origin : "http://localhost/3001"
}

//MIDDLEWARE
App.use(bodyParser.json());
App.use(cors(corsOption));
App.use(bodyParser.urlencoded({extended : true}));

//ENDPOINT
App.use('/register', register)
App.use('/login', login)
//SERVER RUN
sequel.sync({ force : true }).then(() => {
    console.log('Database Connected..')
    App.listen(PORT, () => {
        console.log("Server Running At " + PORT)
    });
}).catch(err => {
    console.log('Failed To Connect...')
})

