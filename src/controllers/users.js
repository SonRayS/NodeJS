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
            response
                .status(200)
                .send(`${user} - Account deleted successfully `);
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
};
