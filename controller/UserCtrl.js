const UserModel = require("../model/UserModel")

module.exports = class UserInfo {
    static async searchUser(req, res) {
        try {
            const users = await UserModel.find({username: {$regex: req.query.username}})
            .limit(10).select("username email story");

            res.status(202).json({
                ok: true,
                users
            });
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }

    static async getUser(req, res) {
        try {
            const user = await UserModel.findById(req.params.id).select("-password")
            .populate("followers following", "-password");

            if(!user) return res.status(500).json({message: "User is not exist"});

            res.json({user});
            
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }
}