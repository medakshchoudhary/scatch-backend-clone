const express = require("express");
const { regsiterUser, loginUser } = require("../controllers/authController");
const router = express.Router();


require("dotenv").config();

router.get("/", (req,res)=>{
    res.send("working");
});

router.post("/register", regsiterUser);

router.post("/login", loginUser);

module.exports = router;