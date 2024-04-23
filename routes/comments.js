const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');
const commentsCtrl = require('../controllers/comments');



// shallow route will need /comments to begin



// POST /posts/:id/comments (create comment action)
router.post('/posts/:id/comments', ensureLoggedIn, commentsCtrl.create);



module.exports = router;