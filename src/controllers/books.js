const Book = require("../models/book");

const getListBooks = (request, response) => {
    return Book.find({})
        .then((data) => {
            response.status(200).send(data);
        })
        .catch((err) => response.status(500).send(err.message));
};

const postAddBook = (request, response) => {
    return Book.create({ ...request.body })
        .then((book) => {
            response.status(201).send(book);
        })
        .catch((err) => response.status(500).send(err.message));
};

const getBookId = (request, response) => {
    const { book_id } = request.params;
    return Book.findById(book_id)
        .then((book) => {
            response
                .status(200)
                .send(book ? book : "Book with this name not found");
        })
        .catch((err) => response.status(500).send(err.message));
};

const updateBook = (request, response) => {
    const { book_id } = request.params;

    return Book.findByIdAndUpdate(book_id, { ...request.body })
        .then((book) => {
            response.status(200).send(book);
        })
        .catch((err) => response.status(500).send(err.message));
};

const deleteBookId = (request, response) => {
    const { book_id } = request.params;

    return Book.findByIdAndDelete(book_id)
        .then((book) => {
            response.status(200).send(book);
        })
        .catch((err) => response.status(500).send(err.message));
};

module.exports = {
    postAddBook,
    getListBooks,
    getBookId,
    updateBook,
    deleteBookId,
};
