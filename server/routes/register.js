const router = require('express').Router();
const { check } = require('express-validator');
const registerController = require('../controllers/registerController');

const checkingValidation = [
    check('username').isLength({max : 15}).withMessage('Username Must Less Than 15 Character'),
    check('email').isEmail().withMessage("Should Be Valid Email...")
]

router.route('/')
    .post(checkingValidation, registerController)

module.exports = router