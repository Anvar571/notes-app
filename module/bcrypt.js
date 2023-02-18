const bcrypt = require("bcrypt");

module.exports = class Hash{
    static async PasswordHash(val) {
        return bcrypt.hash(val, 10);
    }

    static async ComparePass(password, encrypt) {
        return bcrypt.compare(password, encrypt);
    }
}