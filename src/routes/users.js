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
    /*getListBooks,
    postAddBook,
    putAddIdBook,
    getMyBooks,
    postDeleteMyBook,
    deleteMyBookId, */
} = require("../controllers/users");

router.use(loggerTwo);
router.get("/", getInfo);
router.get("/library", getLibrary);
router.get("/library/users", getUsers);
router.post("/library/users/create_user", createUser);
router.get("/library/users/:user_id", getUser);
router.patch("/library/users/:user_id", updateUser);
router.delete("/library/users/:user_id", deleteUser);
/* router.get("/library/users/:user_id/get_list_books", getListBooks);
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
