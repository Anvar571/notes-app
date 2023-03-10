const UserModel = require("../model/UserModel");
const { PasswordHash, ComparePass } = require("../module/bcrypt");
const { RefreshToken, AccessToken } = require("../module/jwt");

module.exports = class UserCtrl {
    static async UserRegisterCtrl(req, res, next) {
        try {
            const {username, email, password, story} = req.body;
            let newUserName = username.toLowerCase().replace(/ /g, '');
            
            const checkUserName = await UserModel.findOne({username: newUserName});
            if (checkUserName) return res.status(400).json({message: "This username already registered"})

            const newEmail = await UserModel.findOne({email: email});
            if (newEmail) return res.status(400).json({message: "This email already registered"})

            const passHash = await PasswordHash(password);
            
            const newUser = new UserModel({
                username: newUserName, email, password: passHash, story
            })
            
            // token generation
            const refresh_token = await RefreshToken({id: newUser._id})
            const access_token = await AccessToken({id: newUser._id});

            res.cookie("refreshtoken", refresh_token, {
                httpOnly: true,
                path: "/api/auth/refreshtoken",
                maxAge: 30*24*60*60*1000 // 30 day
            })

            await newUser.save();

            res.json({
                ok: true,
                access_token,
                message: "Verification link sent to email"
                // user: {
                //     newUser
                // }
            })
            next();
        } catch (error) {
            res.status(504).json({message: error.message});
        }
    }

    static async UserLoginCtrl(req, res, next) {
        try {
            const {email, password} = req.body;

            console.log({email, password});

            const checkUser = await UserModel.findOne({email}).select("email username password");

            if (!checkUser) return res.status(400).json({message: "Email or password envalid"});

            const pass = await ComparePass(password, checkUser.password);
            
            if (!pass) return res.status(402).json({message: "Email or password envalid"})

            const refresh_token = await RefreshToken({id: checkUser._id});
            const access_token = await AccessToken({id: checkUser._id})

            res.cookie("refreshtoken", refresh_token, {
                httpOnly: true,
                path: "/api/auth/refreshtoken",
                maxAge: 30*24*60*60*1000
            })

            res.status(201).json({
                ok: true,
                message: "Login success",
                access_token,
                user: {
                    checkUser,
                }
            })
            next();

        } catch (error) {
            res.status(504).json({message: error.message});
        }
    }

    static async Logout(req, res) {
        try {
            res.clearCookie("refreshtoken", {
                path: "/api/auth/refreshtoken"
            })
            next();

        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }

    static async GetAllUsers(req, res){
        try {
            const users = await UserModel.find({}).select("username email story")

            res.json({
                ok: true,
                users: {
                    users
                }
            });
            next();

        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }

    static async GenerateToken(req, res){
        try {
            // const token = 
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }
}