const cors = require("cors");
const { connectDatabase } = require("./connection.js");
const userRoute = require("./routes/userRoute.js");
const express = require("express");
const PORT = 3000;
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDatabase();
});

app.get("/", (req, res) => {
  res.send(`Server is running! PORT:${PORT}`);
});
