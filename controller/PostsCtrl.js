const PostsModel = require("../model/PostsModel");
const slugify = require("slugify");


module.exports = class PostCtrl {
  static async CreatePost(req, res, next) {
    try {
      const { title, description } = req.body;

      if (title === undefined || description === undefined)
        throw new Error("Title or description is empty");

      if (title.length < 10 || description.length < 10)
        throw new Error(
          "Eng kamida title uzunligi 10 description esa 10 bo'lishi kerak"
    );

      const newSlug = slugify(title, {
        trim: true,
        replacement: "-",
        remove: undefined,
        lower: true,
        strict: true,
      });

      const newPost = new PostsModel({ title, description, slug: newSlug, user: req.user._id });

        await newPost.save();

      res.status(201).json({
        ok: true,
        message: "Post created",
        post: newPost,
      });
      next();

    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async GetAllPosts(req, res, next) {
    try {
        const allPost = await PostsModel.find({});
        
        res.json({
            ok: true,
            allpost: {
                allPost
            }
        })
        next();

    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async GetOnePostId(req, res, next) {
    try {
      const post = await PostsModel.findOne({slug: req.params.id});

      res.json({
        ok: true,
        postOne: {
          post,
        },
      });
      next();

    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async SavePost(req, res, next) {
    try {
        next();

    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async UpdataOnePost(req, res) {
    try {
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async DeletePost(req, res) {
    try {
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
