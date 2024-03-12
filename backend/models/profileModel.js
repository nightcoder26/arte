const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileInfoSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  experience: { type: String },
  education: { type: String },
  skills: [{ type: String }],
  address: { type: String },
});

const ProfileInfo = mongoose.model("ProfileInfo", profileInfoSchema);

module.exports = ProfileInfo;
