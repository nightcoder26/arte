const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  token: { type: String },
  badges: [{ type: mongoose.Schema.Types.ObjectId, ref: "Badge" }],
  profileInfo: { type: mongoose.Schema.Types.ObjectId, ref: "ProfileInfo" },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
