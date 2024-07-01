const router = require("express").Router();
const loggerTwo = require("../middlewares/loggerTwo");
const {
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
} = require("../controllers/users");

router.use(loggerTwo);
/* --------------------------LIBRARY-------------------------- */
router.get("/", getLibrary);
/* --------------------------LIBRARY-------------------------- */

/* --------------------------USER-------------------------- */
router.get("/library/users", getUsers);
router.get("/library/create_user", createUser);
router.get("/library/users/:user_id", getUser);
/* --------------------------USER-------------------------- */

/* --------------------------LIBRARY_BOOK-------------------------- */
router.get("/library/users/:user_id/get_list_books", getListBooks);
/* --------------------------LIBRARY_BOOK-------------------------- */

/* --------------------------ADD_BOOK-------------------------- */
router.post(
    "/library/users/:user_id/get_list_books/add_book_collection",
    postAddBook
);
router.put(
    "/library/users/:user_id/get_list_books/add_book_collection/:id_books",
    putAddIdBook
);
/* --------------------------ADD_BOOK-------------------------- */

/* --------------------------MY_LIBRARY_BOOK-------------------------- */
router.get("/library/users/user_id/my_books", getMyBooks);
/* --------------------------MY_LIBRARY_BOOK-------------------------- */

/* --------------------------DEL_BOOK-------------------------- */
router.post(
    "/library/users/:user_id/my_books/delete_my_book",
    postDeleteMyBook
);

router.delete(
    "/library/users/:user_id/my_books/delete_my_book/:id_books",
    deleteMyBookId
);
/* --------------------------DEL_BOOK-------------------------- */

module.exports = router;
