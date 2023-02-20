const { CreateComment } = require("../controller/CommentCtrl");

const router = require("express").Router();

router.post("/create", CreateComment);

module.exports = router;