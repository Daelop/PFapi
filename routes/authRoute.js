const controllers = require("../controllers");
const express = require("express");
const router = express.Router();

router.get("/auth/discord/redirect", (req,res)=>{controllers.authController.discordAuth(req, res)} );
module.exports = router;
