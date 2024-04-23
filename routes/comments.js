const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');
const commentsCtrl = require('../controllers/comments');



// shallow route will need /comments to begin


// GET /comments/:id/edit (edit comment action)
router.get('/comments/:id/edit', ensureLoggedIn, commentsCtrl.editComment);
// POST /posts/:id/comments (create comment action)
router.post('/posts/:id/comments', ensureLoggedIn, commentsCtrl.create);
// PUT /comments/:id (update comment action)
router.put('/comments/:id', ensureLoggedIn, commentsCtrl.update);



module.exports = router;