var mongoose = require("mongoose");
const router = require("express").Router();
const userDataController = require("../../controllers/userDataController");
var crypto = require("crypto-js");
var hmacSHA256 = require("crypto-js/hmac-sha256");
const db = require("../../models");

//Hits http://server/api/users
router.get('/', userDataController.findAll);

router.post('/', (req, res) => {
  const emailAddress = req.body.emailAddress;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  const hmacHash = hmacSHA256(password, 'secret');
  const hash = crypto.enc.Base64.stringify(hmacHash);
  
  const preAccessToken = emailAddress + password;
  const hmacHashAccessToken = hmacSHA256(preAccessToken, 'secret');
  const accessToken = crypto.enc.Base64.stringify(hmacHashAccessToken);

  db.User.create({
    email: emailAddress,
    hash: hash,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    accessToken: accessToken
  })
});

let login = {
  firstName: '',
  lastName: '',
  accessToken: ''
};

router.post('/returninguser', (req, res) => {
  const requestedEmail = req.body.emailAddress;
  const userPassword = req.body.password
  
  const hmacHash = hmacSHA256(userPassword, 'secret');
  const serverHash = crypto.enc.Base64.stringify(hmacHash);
  console.log(serverHash);
  
 
  db.User.findOne({ 
    'email': requestedEmail 
  })
  .then (function(users) {
    if (users) {
      if (users.hash === serverHash) {
        console.log("Username and password match, login success");
        login.firstName = users.firstName;
        login.lastName = users.lastName;
        login.accessToken= users.accessToken;
      }
      else {
        console.log("Email exists, but password does not match");
        login.firstName = '';
        login.lastName = '';
        login.accessToken= '';
      }  
    }
    else {
      console.log("User does not exist");
      login.firstName = '';
      login.lastName = '';
      login.accessToken= '';
    }
  });  
});

router.get("/returninguser", (req, res) => {
  res.json(login);
});






module.exports = router;