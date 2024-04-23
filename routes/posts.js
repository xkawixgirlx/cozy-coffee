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
// GET /posts/:id/edit This is the route for (editing functionality)
router.get('/:id/edit', ensureLoggedIn, postsCtrl.edit);
// POST /posts create post page (create functionality)
router.post('/',ensureLoggedIn, postsCtrl.create);
// PUT /:id this is for the Update functionality (Update Action)
router.put('/:id', ensureLoggedIn, postsCtrl.update);
// DELETE /posts/:id  delete a post you created (delete functionality)
router.delete('/:id', ensureLoggedIn, postsCtrl.delete);



module.exports = router;
