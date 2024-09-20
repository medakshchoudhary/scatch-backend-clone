const express = require("express");
const { regsiterUser, loginUser, logoutUser } = require("../controllers/authController");
const router = express.Router();


router.get("/", (req,res)=>{
    res.send("working");
});

router.post("/register", regsiterUser);

router.post("/login", loginUser);

router.get("/logout", logoutUser);

module.exports = router;