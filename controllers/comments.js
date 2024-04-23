const Post = require('../models/post');



module.exports = {
    create,
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