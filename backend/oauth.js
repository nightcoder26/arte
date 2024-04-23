const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();
const { OAuth2Client } = require("google-auth-library");

const getUserData = async (access_token) => {
  const response = await fetch(
    `https://www.googleapis.com/oauth2/v3/userinfo?alt=json&access_token=${access_token}`
  );
  const data = await response.json();
  console.log(data);
};

router.get("/", async (req, res) => {
  const code = req.query.code;
  try {
    const redirectUrl = "http://127.0.0.1:3000/oauth";
    const oAuth2Client = new OAuth2Client(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      redirectUrl
    );
    const response = await oAuth2Client.getToken(code);
    await oAuth2Client.setCredentials(response.tokens);
    console.log("Tokens received");
    const user = oAuth2Client.credentials;
    console.log("creds", user);
    await getUserData(user.access_token);
  } catch (err) {
    console.log(err, "error with google auth");
  }
});

module.exports = { getUserData };
