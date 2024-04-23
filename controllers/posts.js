const Post = require('../models/post');


module.exports = {
    index,
    create,
    new: newPost,
    show,
    delete: deletePost,
    edit,
    update,
};


async function update(req, res) {
    try {
        const updatedPost = await Post.findOneAndUpdate({_id: req.params.id, user: req.user._id}, req.body, {new: true});
        return res.redirect(`/posts/${updatedPost._id}`);
    } catch (err) {
        console.log(err.message);
        return res.redirect('/posts');
    }
};



async function edit(req, res) {
    const post = await Post.findOne({_id: req.params.id, user: req.user._id});
    if (!post) return res.redirect('/posts');
    res.render('posts/edit', { post });
};


async function deletePost(req, res) {
    console.log(req.params.id);
    await Post.findOneAndDelete({ _id: req.params.id, user: req.user._id });
    res.redirect('/posts');
};



async function show(req, res) {
    const post = await Post.findById(req.params.id);
    res.render('posts/show', { title: 'Posts Detail Page', post });
};



async function newPost(req, res) {
    res.render('posts/new', { title: 'Add New Post', errorMSg: '' });
};



async function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    const post = new Post(req.body);
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