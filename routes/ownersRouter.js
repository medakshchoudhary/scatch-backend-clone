const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model")


if(process.env.NODE_ENV === "development"){
    router.post("/create", async (req,res)=>{
        let owners = await ownerModel.find();
        if(owners.length > 0){
            return res
            .status(501)
            .send("You cant create a new owner")
        }
        else{
            let { fullname, email, password } = req.body;
            let createdUser = await ownerModel.create({
                fullname,
                email,
                password,
            });

            res.status(201).send(createdUser);
        }
    });
}

router.get("/", (req,res)=>{
    res.send("working");
});


module.exports = router;