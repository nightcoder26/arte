const mongoose = require("mongoose");
//dotenv
require("dotenv").config();
//DB URI
const DB_URI = process.env.DB_URI;

async function connectDatabase() {
  try {
    await mongoose.connect(DB_URI);
    console.log("Connected to database");
  } catch (err) {
    console.log("Error connecting database ", err);
  }
}

module.exports = { connectDatabase };
