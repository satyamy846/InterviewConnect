const feedbackController = require('../controller/feedbackController');
const express = require('express');
const auth = require('../middleware/auth.js');
const router = express.Router();


router.post('/comment/:id',auth.authenticate,feedbackController.postFeedback);
router.get('/feedback',feedbackController.showfeedback);

module.exports = router;
