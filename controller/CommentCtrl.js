const CommentModel = require("../model/CommentModel");
const PostsModel = require("../model/PostsModel");

module.exports = class CommentCtrl {
    static async CreateComment(req, res, next){
        try {
            const {title, postId, postUserId} = req.body;
            if(title == undefined) throw new Error("Is not empty comment input!");

            const newComment = new CommentModel({
                title,
                user: req.user._id,
                postId: postId,
                postUserId: postUserId
            })

            await PostsModel.findOneAndUpdate({id: postId}, {
                $push: {comments: newComment._id}
            }, {new: true})

            await newComment.save();
            
            res.json({
                ok: true,
                comment: {
                    newComment
                }
            })
            // next();
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }

    static async UpdateComment(req, res, next){
        try {
            next();
            
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }

    static async DeleteComment(req, res, next){
        try {
            next();
            
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }
}