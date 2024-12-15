require("dotenv").config();
const express = require('express');
const app = express();
const{ connectToDB } = require("./config/db.js");
const bodyParser = require('body-parser');


process.on("uncaughtException", (error) => {
    console.log("Uncaught Exception..... 💣 🔥 stopping the server....");
    console.log(error.name, error.message);

    process.exit(1);
});
connectToDB();
app.use(express.json());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;


app.get("/test", (req, res) => {
    res.json({
        Hi: "Welcome to Housing System",
    });
});

const server = app.listen(
    PORT, 
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);

process.on("unHandleRejection", (error) => {
    console.log("Unhandled Rejection..... 💣 🔥 stopping the server....");
    console.log(error.name, error.message);
    server.close(() => {
        process.exit(1);
    });
});

