const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    postText: {
        type: String,
        required: true,
        trim: true
    },
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Array,
        default: [],
    },
}, { timestamps: true });

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
