const mongoose = require('mongoose');
const plm = require('passport-local-mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/pinterestClone");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    dp: {
        type: String, // URL to the profile picture
        default: ''
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post' // Assuming a Post model exists
    }]
}, { timestamps: true });

UserSchema.plugin(plm);

module.exports = mongoose.model('User', UserSchema);

