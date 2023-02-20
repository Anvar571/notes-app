const UserModel = require("../model/UserModel")

module.exports = class UserInfo {
    static async getMeUser(req, res, next) {
        try {
            const user = req.user
            res.json({
                ok: true,
                currentUser: user
            })

            next();
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }

    static async searchUser(req, res, next) {
        try {
            const users = await UserModel.find({username: {$regex: req.query.username}})
            .limit(10).select("username email story");

            res.status(202).json({
                ok: true,
                users
            });
            next();

        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }

    static async getUser(req, res, next) {
        try {
            const user = await UserModel.findById(req.params.id).select("-password")
            .populate("followers following", "-password");

            if(!user) return res.status(500).json({message: "User is not exist"});

            res.json({user});
            next();
            
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }
}