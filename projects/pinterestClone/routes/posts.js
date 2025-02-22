const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    imageText: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
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
