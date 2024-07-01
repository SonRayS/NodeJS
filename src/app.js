const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/users");
const loggerOne = require("./middlewares/loggerOne");

dotenv.config();

const app = express();

const {
    PORT = 3005,
    API_URL = "http://127.0.0.1",
    MONGO_URL = "mongodb://127.0.0.1:27017/library/",
} = process.env;

mongoose
    .connect(MONGO_URL)
    .then((response) => console.log(response, "Connect to MongoLibrary"))
    .catch((err) => {
        console.log("Connect to MongoLibrary", err);
    });

const helloWorld = (request, response) => {
    response.status(200);
    response.send("Hello world");
};

app.use(cors());
app.use(loggerOne);
app.use(bodyParser.json());

app.get("/", helloWorld);

app.post("/", (request, response) => {
    response.status(200);
    response.send("Hello POST");
});

app.use(userRouter);

app.listen(PORT, () => {
    console.log(`Сервер запущен по адресу: ${API_URL}:${PORT} `);
});
