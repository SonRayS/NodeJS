const getUsers = (request, response) => {};

const getUser = (request, response) => {
    const { user_id } = request.params;
    response.status(200);
    response.send(`User id:${user_id}`);
};

const createUser = (request, response) => {};

const updateUser = (request, response) => {};

const deleteUser = (request, response) => {};

const getLibrary = (request, response) => {};

const getListBooks = (request, response) => {};

const postAddBook = (request, response) => {
    response.status(200);
    response.send(request.body);
};

const putAddIdBook = (request, response) => {};

const getMyBooks = (request, response) => {};

const postDeleteMyBook = (request, response) => {};

const deleteMyBookId = (request, response) => {};

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    getLibrary,
    getListBooks,
    postAddBook,
    putAddIdBook,
    getMyBooks,
    postDeleteMyBook,
    deleteMyBookId,
};
