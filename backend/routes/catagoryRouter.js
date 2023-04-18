const catagoryController = require('../controller/catagoryController');
const express = require('express');
const router = express.Router();


router.post('/catagory',catagoryController.postcatagory);
router.get('/get-catagory',catagoryController.getcatagory);
router.put('/update-catagory/:id',catagoryController.updatecatagory);
router.delete('/delete-catagory/:id',catagoryController.deletecatagory);

module.exports = router;