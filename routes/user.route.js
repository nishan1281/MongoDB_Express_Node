//all the losic required in this section will be handled in controller
const express = require('express');
const router = express.Router();

const {getallusers, creatUser, getOneUser, deleteUser, updateUser} = require('../controllers/user.controller');

//here wer should only keep the routing to the variable, will be controled by controller
router.get("/", getallusers);
router.get("/:id", getOneUser);
router.post("/", creatUser);
router.delete ("/:id", deleteUser);
router.patch("/:id", updateUser);

module.exports = router;