const User = require("../models/user");
const Book = require("../models/book");

const getInfo = (request, response) => {
    response.status(200);
    response.send("Hello reader, go to the tab /Library");
};

const getLibrary = (request, response) => {
    response.status(200);
    response.send("Library access confirmed");
};

const getUsers = (request, response) => {
    return User.find({})
        .then((data) => {
            response.status(200).send(data);
        })
        .catch((err) => response.status(500).send(err.message));
};

const getUser = (request, response) => {
    const { user_id } = request.params;
    return User.findById(user_id)
        .then((user) => {
            response
                .status(200)
                .send(user ? user : "User with this name not found");
        })
        .catch((err) => response.status(500).send(err.message));
};

const createUser = (request, response) => {
    return User.create({ ...request.body })
        .then((user) => {
            response.status(201).send(user);
        })
        .catch((err) => response.status(500).send(err.message));
};

const updateUser = (request, response) => {
    const { user_id } = request.params;

    return User.findByIdAndUpdate(user_id, { ...request.body })
        .then((user) => {
            response.status(200).send(user);
        })
        .catch((err) => response.status(500).send(err.message));
};

const deleteUser = (request, response) => {
    const { user_id } = request.params;

    return User.findByIdAndDelete(user_id)
        .then((user) => {
            response
                .status(200)
                .send(`${user} - Account deleted successfully `);
        })
        .catch((err) => response.status(500).send(err.message));
};

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
    getInfo,
    getLibrary,
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    postAddBook,
    getListBooks,
    getBookId,
    updateBook,
    deleteBookId,
};
