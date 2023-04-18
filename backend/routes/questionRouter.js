const questionController = require('../controller/questionController');
const express = require('express');
const router = express.Router();


router.post('/question',questionController.postquestion);
router.get('/get-question',questionController.getquestion);
router.put('/update-question/:id',questionController.updatequestion);
router.delete('/delete-question/:id',questionController.deletequestion);

module.exports = router;