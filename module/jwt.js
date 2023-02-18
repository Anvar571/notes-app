const jwt = require("jsonwebtoken");

module.exports = class Tokens {
    static async RefreshToken(data) {
        return jwt.sign(data, process.env.REFRESH_TOKEN, {expiresIn: "30d"});
    }

    static async AccessToken(data) {
        return jwt.sign(data, process.env.ACCESS_TOKEN, {expiresIn: "1d"});
    }
}