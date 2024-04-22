const Post = require('../models/post');


module.exports = {
    index,
    create,
    new: newPost,
    show,
};



async function show(req, res) {
    const posts = await Post.findById(req.params.id);
    res.render('posts/show', { title: 'Posts Detail Page', posts });
};



async function newPost(req, res) {
    res.render('posts/new', { title: 'Add New Post', errorMSg: '' });
};



async function create(req, res) {
    const post = new Post(req.body);
    post.content = req.body.content;
    post.userName = req.user._id;
    try {
        await post.save();
        res.redirect(`/posts/${post._id}`);
    } catch (err) {
        console.log(err.message);
        res.redirect(`/posts/new`);
    }
};


async function index(req, res) {
    const posts = await Post.find({});
    res.render('posts/index', { title: 'All Coffee Posts', posts });
};