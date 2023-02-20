const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: true
    },
    postId: {
        type: mongoose.Types.ObjectId,
        ref: "post",
        required: true
    },
    postUserId: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("comment", CommentSchema)