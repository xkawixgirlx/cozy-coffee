const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/posts');
const ensureLoggedIn = require('../config/ensureLoggedIn');

/* GET users listing. */

// All routes will start with '/posts'


// GET /posts homepage (posts home functionality)
router.get('/', postsCtrl.index);
// GET /posts/new new posts form (posts new functionality)
router.get('/new', ensureLoggedIn, postsCtrl.new);
// GET /posts/:id show post details page (show functionality)
router.get('/:id', postsCtrl.show);
// POST /posts create post page (create functionality)
router.post('/',ensureLoggedIn, postsCtrl.create);
// DELETE /posts/:id  delete a post you created (delete functionality)
router.delete('/:id', ensureLoggedIn, postsCtrl.delete);



module.exports = router;
