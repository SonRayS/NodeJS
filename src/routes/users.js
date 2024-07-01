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

/* router.get("/", getLibrary);
router.get("/library/users", getUsers); */
router.get("/library", createUser);
/* router.get("/library/users/:user_id", getUser);
router.get("/library/users/:user_id/get_list_books", getListBooks);
router.post(
    "/library/users/:user_id/get_list_books/add_book_collection",
    postAddBook
);
router.put(
    "/library/users/:user_id/get_list_books/add_book_collection/:id_books",
    putAddIdBook
);
router.get("/library/users/user_id/my_books", getMyBooks);
router.post(
    "/library/users/:user_id/my_books/delete_my_book",
    postDeleteMyBook
);
router.delete(
    "/library/users/:user_id/my_books/delete_my_book/:id_books",
    deleteMyBookId
);
 */
module.exports = router;
