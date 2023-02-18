const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    reply: mongoose.Types.ObjectId,
    user: {type: mongoose.Types.ObjectId},
    postId: mongoose.Types.ObjectId,
    postUserId: mongoose.Types.ObjectId
}, {
    timestamps: true
})

module.exports = mongoose.model("comment", CommentSchema)