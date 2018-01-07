var mongoose = require("mongoose");
const router = require("express").Router();
const userDataController = require("../../controllers/userDataController");
const db = require("../../models");

//Hits http://server/api/users
router.get('/', userDataController.findAll);

router.post('/', (req, res) => {
  db.User.create({
    email: req.body.emailAddress,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  })
});

module.exports = router;