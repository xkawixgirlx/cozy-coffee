const express = require('express');
const router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function (req, res, next) {
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


router.get('/oauth2callback', function (req, res, next) {
  const redirectTo = req.session.redirectTo;
  delete req.session.redirectTo;
  passport.authenticate(
    'google',
    {
      successRedirect: redirectTo || '/',
      failureRedirect: '/'
    }
  )(req, res, next);  // Call the middleware returned by passport
});

router.get('/logout', function (req, res) {
  req.logOut(function () {
    res.redirect('/');
  });
});

module.exports = router;
