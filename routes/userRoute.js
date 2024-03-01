const express = require("express");
const controllers = require("../controllers");
const app = express();
const router = express.Router();
app.use(express.json());

router.post("/users", (req,res)=>{controllers.userController.getUserFromDiscord(req, res)});
router.put("/users/:id",(req, res)=>{ controllers.userController.updateUser(req, res)});

module.exports = router;
