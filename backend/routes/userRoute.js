const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

//getting all users details
//CRUD operations
router.get("/", UserController.getUsers);
router.get("/:id", UserController.getUserById);
router.put("/update/:id", UserController.updateUserById);
router.post("/", UserController.createUser);
router.delete("/:id", UserController.deleteUser);

module.exports = router;
