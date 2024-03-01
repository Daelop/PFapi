// Description: This file contains the logic for the user routes.
const Models = require("../Models");

const getUserFromDiscord = async (req, res) => {
  Models.User.findOne({ discordId: req.user.id }, (err, user) => {
    if (err) {
      console.log(err);
    }
    if (user) {
      res.send(user);
    } else {
      const newUser = new Models.User({
        discordId: req.user.id,
        username: req.user.username,
      });
    }
  });
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await Models.User.findByIdAndUpdate(id, req.body);
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getUserFromDiscord, updateUser };