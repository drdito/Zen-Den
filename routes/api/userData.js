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

let login = {
  loginSuccess: false,
  passwordIncorrect: false,
  emailInvalid: false
};

router.post('/returninguser', (req, res) => {
  const requestedEmail = req.body.emailAddress;
  const password = req.body.password
  
 
  db.User.findOne({ 
    'email': requestedEmail 
  })
  .then (function(users) {
    if (users) {
      if (users.password === password) {
        console.log("Username and password match, login success");
        login.loginSuccess = true;
        login.passwordIncorrect = false;
        login.emailInvalid = false;
      }
      else {
        console.log("Email exists, but password does not match");
        login.loginSuccess = false;
        login.passwordIncorrect = true;
        login.emailInvalid = false;
      }  
    }
    else {
      console.log("User does not exist");
      login.loginSuccess = false;
        login.passwordIncorrect = false;
        login.emailInvalid = true;
    }
  });  
});

router.get("/returninguser", (req, res) => {
  res.json(login);
});






module.exports = router;