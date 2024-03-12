const User = require("../models/userModel");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: `Error getting all users /user ${err}` });
  }
};
//by id
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: `Error getting user by id /user/:id ${err}` });
  }
};

// udpdate user

const updateUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;
    user.mobile = req.body.mobile;
    user.badges = req.body.badges;
    user.profileInfo = req.body.profileInfo;
    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (err) {
    res
      .status(500)
      .json({ message: `Error updating user by id /user/update/:id ${err}` });
  }
};

module.exports = { getUsers, getUserById, updateUserById };
