const { UserRegisterCtrl, UserLoginCtrl, GetAllUsers } = require("../controller/AuthCtrl");
const { searchUser } = require("../controller/UserCtrl");

const router = require("express").Router();

router.post("/register", UserRegisterCtrl);

router.post("/login", UserLoginCtrl);


// router.get("/refresh")

// router.get("/logout")

module.exports = router