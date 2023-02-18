const { CheckUserCookie } = require("../middleware/authMiddleware");

const routers = require("express").Router();

// home
routers.use("/", CheckUserCookie, require("./HomeRoute"));

// auth
routers.use("/auth", require("./AuthRoute"))

// users
routers.use("/user", CheckUserCookie, require("./UserRoutes"));

// notes
routers.use("/notes", CheckUserCookie, require("./PostsRoute"));

// routers.use("/auth/telegram", require("./TelegramAPI"));

module.exports  = routers