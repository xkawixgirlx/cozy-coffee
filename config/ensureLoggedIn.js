module.exports = function (req, res, next) {
    if ( req.isAuthenticated() ) return next();
    // Set session property for next request
    if (req.method === 'GET') req.session.redirectTo = req.originalUrl;
    res.redirect('/auth/google');
  };