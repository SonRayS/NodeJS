const User = require("../models/user");

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
            response.status(200).send(user);
        })
        .catch((err) => response.status(500).send(err.message));
};

/* const getListBooks = (request, response) => {};

const postAddBook = (request, response) => {
    response.status(200);
    response.send(request.body);
};

const putAddIdBook = (request, response) => {};

const getMyBooks = (request, response) => {};

const postDeleteMyBook = (request, response) => {};

const deleteMyBookId = (request, response) => {};
 */
module.exports = {
    getInfo,
    getLibrary,
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    /*  getListBooks, */
    /*    postAddBook, */
    /*     putAddIdBook, */
    /*     getMyBooks, */
    /*     postDeleteMyBook, */
    /*     deleteMyBookId, */
};
