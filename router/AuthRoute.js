const { UserRegisterCtrl, UserLoginCtrl, Logout } = require("../controller/AuthCtrl");

const router = require("express").Router();

router.post("/register", UserRegisterCtrl);

router.post("/login", UserLoginCtrl);

// router.post("/refreshtoken")

router.get("/logout", Logout)

module.exports = router
