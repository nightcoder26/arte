const mongoose = require("mongoose");
const { Schema } = mongoose;

const roomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  capacity: { type: Number, default: 2 },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  meetings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Meeting" }],
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
