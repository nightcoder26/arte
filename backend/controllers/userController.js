const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const { OAuth2Client } = require("google-auth-library");
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

// router.post("/", UserController.createUser);
const createUser = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    if (!(username && password && email)) {
      res.status(400).send("All inputs are required");
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(409).send("User already exists");
    }

    const encPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: encPassword,
    });
    const token = jwt.sign(
      { id: newUser._id, email },
      "lmao", // jwt secret use from env if needed
      {
        expiresIn: "3h",
      }
    );
    newUser.token = token;
    newUser.password = undefined;
    res.status(200).json(newUser);
  } catch (err) {
    console.log(err);
  }
  // try {
  //   const user = new User({
  //     username: req.body.username,
  //     password: req.body.password,
  //     email: req.body.email,
  //     mobile: req.body.mobile,
  //     badges: req.body.badges,
  //     profileInfo: req.body.profileInfo,
  //   });
  //   const newUser = await user.save();
  //   res.status(201).json(newUser);
  // } catch (err) {
  //   res
  //     .status(500)
  //     .json({ message: `Error in creating a new user /user ${err}` });
  // }
};
// router.delete("/:id", UserController.deleteUser);

const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await user.remove();
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ message: `Error deleting user /user ${err}` });
  }
};

const login = async (req, res) => {
  // try {
  //   const user = await User.findOne({ username: req.body.username });
  //   console.log(user);
  //   if (!user) {
  //     return res.status(404).json({ message: "User not found" });
  //   }
  //   if (user.password !== req.body.password) {
  //     return res.status(401).json({ message: "Invalid credentials" });
  //   }
  //   res.json({ message: "Login successful" });
  // } catch (err) {
  //   res.status(500).json({ message: `Error logging in /user/login ${err}` });
  // }

  try {
    //get data
    const { username, password } = req.body;
    //check
    if (!(username && password)) {
      res.status(400).send("Input all fields");
    }

    // find user
    const user = await User.findOne({ username });
    //not found
    if (!user) {
      res.status(404).send("User not found");
    }
    // check password
    const checkPassword = await bcrypt.compare(password, user.password);
    if (user && checkPassword) {
      const token = jwt.sign({ id: user._id }, "lmao", {
        expiresIn: "2h",
      });
      user.token = token;
      user.password = undefined;
      //cookie
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      res.status(200).cookie("token", token, options).json({
        success: true,
        token,
        user,
      });
    }
    //success
  } catch (err) {
    console.log(err);
  }
};

// const signup = async (req, res) => {
//   try {
//     // Check if the username already exists
//     const existingUser = await User.findOne({ username: req.body.username });
//     if (existingUser) {
//       return res.status(400).json({ message: "Username already exists" });
//     }

//     const newUser = new User({
//       username: req.body.username,
//       password: req.body.password,
//       email: req.body.email,
//       mobile: req.body.mobile,
//       badges: req.body.badges,
//       profileInfo: req.body.profileInfo,
//     });

//     const savedUser = await newUser.save();

//     res.status(201).json(savedUser);
//   } catch (error) {
//     res.status(500).json({ message: `Error in user signup: ${error.message}` });
//   }
// };

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const auth = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Referrer-Policy", "no-referrer-when-downgrade");

  const redirectUrl = "http://127.0.0.1:3000/oauth";

  const oAuth2Client = new OAuth2Client(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    redirectUrl
  );

  const authorizeUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope:
      "https://www.googleapis.com/auth/userinfo.profile openid https://www.googleapis.com/auth/userinfo.email",
    prompt: "consent",
  });
};
module.exports = {
  getUsers,
  getUserById,
  updateUserById,
  createUser,
  deleteUser,
  login,
  auth,
};
