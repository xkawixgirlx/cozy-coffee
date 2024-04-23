const Post = require('../models/post');



module.exports = {
    create,
    editComment,
    update,
    delete: deleteComment,
};



async function update(req, res) {
    const post = await Post.findOne({ 'comments._id': req.params.id });
    const comment = post.comments.id(req.params.id);
    if (!comment.user.equals(req.user._id)) return res.redirect(`/posts/${post._id}`);
    comment.comment = req.body.comment;
    console.log(comment.comment);
    try {
        await post.save();
    } catch (err) {
        console.log(err.message);
    }
    res.redirect(`/posts/${post._id}`);
};



async function editComment(req, res) {
    const post = await Post.findOne({ 'comments._id': req.params.id });
    const comment = post.comments.id(req.params.id);
    res.render(`comments/edit`, { title: 'Edit Comment', post, comment });
};



async function deleteComment(req, res) {
    const post = await Post.findOne({ 'comments._id': req.params.id, 'comments.user': req.user._id });
    if (!post) return res.redirect(`/posts/${post._id}`);
    post.comments.remove(req.params.id);
    await post.save();
    res.redirect(`/posts/${post._id}`);
};



async function create(req, res) {
    const post = await Post.findById({ _id: req.params.id });
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    post.comments.push(req.body);
    try {
        await post.save();
        return ('Your Comment Posted Successfully!');
    } catch (err) {
        console.log(err.message);
    }
    res.redirect(`/posts/${post._id}`);
};