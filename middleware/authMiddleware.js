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
                message: "Please now register, or your is not token"
            })
        }
    }

    static async priviteRoute(req, res, next){
        try {
            next();
        } catch (error) {
            
        }
    }
}

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjFkNDM1MTc3OGEyYWJjODJiZTljNyIsImlhdCI6MTY3Njc5Mjg4NSwiZXhwIjoxNjc2ODc5Mjg1fQ.573kp4EKNpr8gc8wGMjfAykWfI6TXeFrqAyHEkSLnZM

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjEwMWY5YmFhZjFiZGI4NWNiMmVlMyIsImlhdCI6MTY3NjczOTA2NSwiZXhwIjoxNjc2ODI1NDY1fQ.DTF0rDY3AxkyRQGhgFiyI2AsBg8H8fIz4x1J2QWuOmI

// .Net o'zining o'rni bor golangni ham o'zining o'rni bor bularning ishlatilish joylari quyidagilar masalan: .Net o'zi multithread ishlaydi lekin golang esa mulithread ishlaydi .net asosan murakkabroq, desktop applarda ishlaydigan ilovalar uchun golang esa proccesslar bilan ishlaydigan loyihalarda ishlatiladi microserveselar qurishda ishlatialdi