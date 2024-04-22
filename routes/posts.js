const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/posts');

/* GET users listing. */

// All routes will start with '/'


// GET /posts homepage (posts home functionality)
router.get('/index', postsCtrl.index);



module.exports = router;
