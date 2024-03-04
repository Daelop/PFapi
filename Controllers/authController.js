const axios = require("axios");
const url = require("url");
const dotenv = require("dotenv").config();
const Models = require("../Models");

const discordAuth = async (req, res) => {
  try {
    const { code } = req.query;
    if (code) {
      const formData = new url.URLSearchParams({
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: "authorization_code",
        code: code.toString(),
        redirect_uri: process.env.REDIRECT_URI,
      });

      const output = await axios.post(
        "https://discord.com/api/v10/oauth2/token",
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (output.data) {
        res.cookie("token", output.data.access_token, {
          maxAge: 3600000,
          httpOnly: false,
        });
        res.redirect("http://localhost:5500/index.html");
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const checkUserFromToken = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (token) {
      const user = await axios.get("https://discord.com/api/v10/users/@me", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      if (user.data) {
        res.status(200).json(user.data);
      }
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const checkEventOwner = async (req, res) => {
  try {
    const token = req.cookies.token;
    const { id } = req.params;
    if (token) {
      const user = await axios.get("https://discord.com/api/v10/users/@me", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      if (user.data) {
        const event = await Models.event.findById(id);
        if (event.creator == user.data.id) {
          res.status(200).json({ message: "You are the owner" });
        } else {
          res.status(401).json({ message: "You are not the owner" });
        }
      }
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const checkProfileOwner = async (req, res) => {
  try {
    const token = req.cookies.token;
    const { id } = req.params;
    if (token) {
      const user = await axios.get("https://discord.com/api/v10/users/@me", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      if (user.data) {
        const profile = await Models.User.findById(id)
          .exec()
          .then((profile) => {
            if (profile.discordId == user.data.id) {
              res.status(200).json({ message: "You are the owner" });
            } else {
              res.status(401).json({ message: "You are not the owner" });
            }
          });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = { discordAuth, checkUserFromToken, checkEventOwner, checkProfileOwner};
