const AdminController = require('../controller/adminController');
const express = require('express');
const router = express.Router();

router.post('/admin/signup',AdminController.signup);
router.post('/admin/login',AdminController.login);

module.exports = router;