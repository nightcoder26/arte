const mongoose = require("mongoose");
const { Schema } = mongoose;

const badgeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String },
});

const Badge = mongoose.model("Badge", badgeSchema);

module.exports = Badge;
