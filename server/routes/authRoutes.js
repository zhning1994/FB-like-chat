const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
    try {
        //create hashed password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        //save user and respond
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;