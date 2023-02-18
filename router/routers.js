const routers = require("express").Router();

// home
routers.use("/", require("./HomeRoute"));

// auth
routers.use("/auth", require("./AuthRoute"))

// users
routers.use("/user", require("./UserRoutes"));

// notes
routers.use("/notes", require("./NotesRoute"));


module.exports  = routers