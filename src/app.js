const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/users");
const bookRouter = require("./routes/books");

dotenv.config();

const app = express();

const {
    PORT = 3005,
    API_URL = "http://127.0.0.1",
    MONGO_URL = "mongodb://127.0.0.1:27017/library",
} = process.env;

mongoose.connect(MONGO_URL).catch((err) => {
    console.log("Connect to MongoLibrary", err);
});

app.use(cors());

app.use(bodyParser.json());

app.use(userRouter);
app.use(bookRouter);

app.listen(PORT, () => {
    console.log(`Сервер запущен по адресу: ${API_URL}:${PORT} `);
});
