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
        maxLength: 200
    },
    comments: [{type: mongoose.Types.ObjectId, ref: "users"}],
    user: {type: mongoose.Types.ObjectId, ref: "users"}
}, {timestamps: true})

module.exports = mongoose.model("notes", PostScema);