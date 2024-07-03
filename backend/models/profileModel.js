const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileInfoSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  experience: { type: String },
  education: { type: String },
  skills: [{ type: String }],
  skillsToLearn: [{ type: String }],
  bio: { type: String },
  github: { type: String },
  linkedin: { type: String },
  twitter: { type: String },
  instagram: { type: String },
  youtube: { type: String },

  address: { type: String },
});

const ProfileInfo = mongoose.model("ProfileInfo", profileInfoSchema);

module.exports = ProfileInfo;
