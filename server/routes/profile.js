const router = require('express').Router();
const profileController = require('../controllers/profileController')

router.route('/')
    .post(profileController)

module.exports = router