const router = require("express").Router();
const loggerOriginalUrl = require("../middlewares/loggerOriginalUrl");
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    getInfo,
    deleteUser,
    getLibrary,
} = require("../controllers/users");

router.use(loggerOriginalUrl);
router.get("/", getInfo);
router.get("/library", getLibrary);
router.get("/library/users", getUsers);
router.post("/library/users/create_user", createUser);
router.get("/library/users/:user_id", getUser);
router.patch("/library/users/:user_id", updateUser);
router.delete("/library/users/:user_id", deleteUser);

module.exports = router;
