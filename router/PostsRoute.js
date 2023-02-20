const { CreatePost, GetOnePostId, GetAllPosts } = require("../controller/PostsCtrl");

const router = require("express").Router();

router.post("/create", CreatePost);

router.get("/allpost", GetAllPosts);

router.get("/:id", GetOnePostId);


module.exports = router