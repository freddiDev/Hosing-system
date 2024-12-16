const mongoose = require("mongoose");

const MONGO_DB_CONFIG = {
    DB: process.env.MONGO_URI,
    PAGE_SIZE: 20,
};

const connectToDB = async () => {
    const connect = await mongoose.connect(MONGO_DB_CONFIG.DB, {
        dbName: process.env.DB_NAME,
    });
    console.log(`MongoDB connected: ${connect.connection.host}`);
};

module.exports = { connectToDB, MONGO_DB_CONFIG };