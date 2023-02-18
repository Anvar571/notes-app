require("dotenv").config();

const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");
const dbConfig = require("./module/db");
const routers = require("./router/routers");

const app = express(cors());
const port = process.env.PORT || 5000;

// middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

async function server() {
    try {
        const db = await dbConfig();

        app.use((req, res, next) => {
            req.db = db;
            next();
        })
    } finally {
        app.use("/api", routers)
    }
}

server();

app.listen(port, () => {
    console.log("server listen on ", port, " port");
})

