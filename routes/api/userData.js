var mongoose = require("mongoose");
const router = require("express").Router();
const userDataController = require("../../controllers/userDataController");

//Hits http://server/api/users
router.get('/', userDataController.findAll);

module.exports = router;