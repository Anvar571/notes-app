const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: [true, "username required"]
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Plase enter a valid email"
        },
        retquired: [true, "Email required"]
    },
    password: {
        type: String,
        trim: true,
        required: [true, "Passwrod required"],
    },
    story: {
        type: String,
        trim: true,
        maxLength: 200
    },
    followers: [{type: mongoose.Types.ObjectId, ref: "users"}],
    following: [{type: mongoose.Types.ObjectId, ref: "users"}],
    saved: [{type: mongoose.Types.ObjectId, ref: "users"}]

}, {
    // create time and update time saved
    timestamps: true
});

module.exports = mongoose.model("users", UserSchema);