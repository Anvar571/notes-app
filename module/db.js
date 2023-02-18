const mongoose = require("mongoose");
const UserModel = require("../model/UserModel");

const dbConfig = async () =>  {
    try {
        mongoose.connect(process.env.DB_URL)
        .then(() => {
            console.log("Connection db successfully");
        }).catch((err) => {
            console.log(err);
        });

        let db = {};
        db.users = await UserModel();

        return db;
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConfig