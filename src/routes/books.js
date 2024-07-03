const router = require("express").Router();
const loggerOriginalUrl = require("../middlewares/loggerOriginalUrl");
const {
    getListBooks,
    postAddBook,
    getBookId,
    updateBook,
    deleteBookId,
} = require("../controllers/books");

router.use(loggerOriginalUrl);
router.get("/library/users/:user_id/list_books", getListBooks);
router.post("/library/users/:user_id/list_books/book_collection", postAddBook);
router.get("/library/users/list_books/:book_id", getBookId);
router.patch("/library/users/list_books/:book_id", updateBook);
router.delete("/library/users/list_books/:book_id", deleteBookId);

module.exports = router;
