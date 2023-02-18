const jwt = require("jsonwebtoken");
const UserModel = require("../model/UserModel");

module.exports = class AuthMiddleware {
    static async CheckUserCookie(req, res, next) {
        try {
            const token = req.header("Authorization");
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);

            const user = await UserModel.findById(decoded.id);
            
            req.user = user;
            next();
        } catch (error) {
            return res.json({
                message: "Please now register!."
            })
        }
    }
}