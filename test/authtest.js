var passport = require('passport');
var GoogleStrategy = require('passport-google').Strategy;
var express = require('express');

passport.use(new GoogleStrategy({
  returnURL: 'http://cryptonite.local.com:3000/auth/google/return',
  realm: 'http://cryptonite.local.com:3000'
}, function (identifier, profile, done) {
  console.log(arguments);
  done(null, {
    id: identifier
  });
}));

passport.serializeUser(function (user, done) {
  console.log("User", user);
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  done(null, {
    id: id
  });
});


var app = express();
app.configure(function () {
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.session({
    secret: 'keyboard cat'
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
});

// Redirect the user to Google for authentication.  When complete, Google
// will redirect the user back to the application at
// /auth/google/return
app.get('/auth/google', passport.authenticate('google'));

// Google will redirect the user to this URL after authentication.  Finish
// the process by verifying the assertion.  If valid, the user will be
// logged in.  Otherwise, authentication has failed.
app.get('/auth/google/return', passport.authenticate('google', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

app.listen(3000);
