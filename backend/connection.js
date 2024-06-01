const mongoose = require("mongoose");
const DB_URI =
  "mongodb+srv://b44068845:wszRvuubhSTQIVzR@cluster0.gjsospa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function connectDatabase() {
  try {
    await mongoose.connect(DB_URI);
    console.log("Connected to database");
  } catch (err) {
    console.log("Error connecting database ", err);
  }
}

module.exports = { connectDatabase };
