const UserController = require('../controller/userController.js');
const express = require('express');
const router = express.Router();


router.post('/user/signup',UserController.signup);
router.post('/user/login',UserController.login);

module.exports = router;