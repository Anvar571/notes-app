const { GetAllUsers } = require("../controller/AuthCtrl");
const { searchUser, getUser, getMeUser } = require("../controller/UserCtrl");

const router = require("express").Router();
router.get("/me", getMeUser)

router.get("/users", GetAllUsers);

router.get("/search", searchUser);

router.get("/:id", getUser);

module.exports = router;