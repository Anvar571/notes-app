const { CheckUserCookie } = require("../middleware/authMiddleware");

const routers = require("express").Router();

// home
routers.use("/", CheckUserCookie, require("./HomeRoute"));

// auth
routers.use("/auth", require("./AuthRoute"))

// users
routers.use("/user", CheckUserCookie, require("./UserRoutes"));

// post
routers.use("/post", CheckUserCookie, require("./PostsRoute"));

// comment
routers.use("/comment", CheckUserCookie, require("./CommentRoute"));

routers.use("/*", (req, res) => {
    res.json({
        ok: false,
        message: "404 not found"
    })
})

// routers.use("/auth/telegram", require("./TelegramAPI"));

module.exports  = routers