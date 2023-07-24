//all the losic required in this section will be handled in controller
const express = require('express');
const router = express.Router();

const getallusers = require('../controllers/user.controller');

//here wer should only keep the routing to the variable, will be controled by controller
router.get("/", getallusers);

module.exports = router;