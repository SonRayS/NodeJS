const router = require("express").Router();
const loggerTwo = require("../middlewares/loggerTwo");
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    getInfo,
    deleteUser,
    getLibrary,
    getListBooks,
    postAddBook,
    getBookId,
    updateBook,
    deleteBookId,
} = require("../controllers/users");

/* -------------------------USER------------------------- */
router.use(loggerTwo);
router.get("/", getInfo);
router.get("/library", getLibrary);
router.get("/library/users", getUsers);
router.post("/library/users/create_user", createUser);
router.get("/library/users/:user_id", getUser);
router.patch("/library/users/:user_id", updateUser);
router.delete("/library/users/:user_id", deleteUser);

/* -------------------------USER------------------------- 
|
|
|
 -------------------------BOOK------------------------- */
router.get("/library/users/:user_id/get_list_books", getListBooks);
router.post(
    "/library/users/:user_id/get_list_books/add_book_collection",
    postAddBook
);
router.get("/library/users/:user_id/get_list_books/:book_id", getBookId);
router.patch("/library/users/:user_id/get_list_books/:book_id", updateBook);
router.delete("/library/users/:user_id/get_list_books/:book_id", deleteBookId);
/* -------------------------BOOK------------------------- */

module.exports = router;
