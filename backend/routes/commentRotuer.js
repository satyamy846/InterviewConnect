const commentController = require('../controller/commentController.js');
const express = require('express');
const auth = require('../middleware/auth.js');
const router = express.Router();


router.post('/comment',commentController.postComment);


module.exports = router;
