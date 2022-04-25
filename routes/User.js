const userController = require("../controllers/User.js");

const router = require("express").Router();

//router.post("/adduser", userController.addUser);
//router.get("/get", userController.getUser);
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);

module.exports = router;
