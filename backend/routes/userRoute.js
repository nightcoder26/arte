const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

//getting all users details
//CRUD operations
router.get("/", UserController.getUsers);
router.get("/:id", UserController.getUserById);
router.put("/update/:id", UserController.updateUserById);
router.post("/login", UserController.login);
router.post("/signup", UserController.createUser);
router.post("/google", UserController.auth);
// router.delete("/:id", UserController.deleteUser);

module.exports = router;
