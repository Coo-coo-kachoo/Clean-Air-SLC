let express = require('express');
let authRouter = express.Router();
// connect/express middleware that validates a JsonWebToken (JWT) and set the req.user with the attributes
let expressJwt = require('express-jwt');

//import settings - needed here for the secret
let settings = require('../config/settings.js');

let authorization = expressJwt({secret: settings.secret});

//import privledges
let admin = require('../middleware/admin.js');

//import user model
let User = require('../models/user.js');
let UserQue = require('../models/userque.js');

//import passport modules: Passport is authentication & authorization middleware for Node.js.
let passport = require('passport');
let Strategy = require('passport-local');

//for tokens
let jwt = require('jsonwebtoken');

//done is passport specific - like a true/false
passport.use(new Strategy((username, password, done) => {
  User.findOne({
    username
  }, (err, currentUser) => {
    if (err) {
      done(err, false);
    } else if (currentUser === null) {
      done(null, false);
    } else {
      currentUser.auth(password, (isCorrect) => {
        if (isCorrect) {
          done(null, true);
        } else {
          done(null, false);
        }
      });
    }
  });
}));

//startup passport
authRouter.use(passport.initialize());

/* Login and Signup Section */
/*--------------------------*/

//login as a user
authRouter.port 

module.exports = authRouter;
