const mongoose = require("mongoose");

const myBookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 2,
    },
    author: {
        type: String,
        required: true,
        minLength: 2,
    },
    year: {
        type: Number,
        required: true,
        minLength: 4,
    },
});

module.exports = mongoose.model("myBook", myBookSchema);
