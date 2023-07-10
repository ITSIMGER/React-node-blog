const express = require('express');
const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

///posts/
router.post("/posts/", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      // If no user is found, send a response with a status code of 400, an error message, and a "message" property with the error message
      return res.status(400).json({
        message: "Wrong username!",
        error: "Wrong username!"
      });
    } 

    const validated = await bcrypt.compare(req.body.password, user.password);
    if (!validated) {
      // If the passwords don't match, send a response with a status code of 400, an error message, and a "message" property with the error message
      return res.status(400).json({
        message: "Wrong Password",
        error: "Wrong Password"
      });
    }

    // If the username and password are correct, return the user object without the password field
    const { password, ...others } = user._doc;
    return res.status(200).json(others);
  } catch (err) {
    // In the event of an error, send a response with a status code of 500 and the error
    res.status(500).json(err);
  }
});


module.exports = router;
