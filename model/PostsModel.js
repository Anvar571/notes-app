const mongoose = require("mongoose");

const PostScema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minLength: 10
    },
    slug: {
        type: String,
        required: true
    },
    user: {type: mongoose.Types.ObjectId, required: true, ref: "users"},
    comments: [{type: mongoose.Types.ObjectId, ref: "users"}]
}, {timestamps: true})

module.exports = mongoose.model("post", PostScema);