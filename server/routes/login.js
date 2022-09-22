const router = require('express').Router();
const { check } = require('express-validator');
const loginController = require('../controllers/loginController');
const checkingValidation = [
    check('username').isLength({max : 15}).withMessage('Username Must Less Than 15 Character'),
    check('email').isEmail()
]

router.route('/')
    .post(checkingValidation, loginController)

module.exports = router