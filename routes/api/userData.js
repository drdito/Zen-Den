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

router.post('/returninguser', (req, res) => {
  const requestedEmail = req.body.emailAddress;
  const password = req.body.password
  let result = "";
  db.User.findOne({ 
    'email': requestedEmail 
  })
  .then (function(users) {
    if (users) {
      if (users.password === password) {
        console.log("Username and password match, login success");
      }
      else {
        console.log("Username exists, but password does not match");
      }  
    }
    else {
      console.log("User does not exist");
    }
  });  
});






module.exports = router;