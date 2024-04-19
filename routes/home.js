const express = require('express');
const router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Cozy-Coffee' });
});


router.get('/auth/google', passport.authenticate(
  //Which passport strategy to use
  'google',
  {
    scope: ['profile', 'email'],
    //Optionally force to pick which account
    prompt: 'select_account'
  }
));


router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    //Change to what is best for your app
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res) {
  req.logOut(function() {
    //With own app - possibly root path
    res.redirect('/');
  });
});

module.exports = router;
