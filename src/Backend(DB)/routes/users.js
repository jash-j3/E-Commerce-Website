const { User } = require("../models/user");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;

router.get(`/`, async (req, res) => {
  const userList = await User.find();

  if (!userList) {
    res.status(500).json({ success: false });
  }
  res.send(userList);
});

router.post(`/signup`, async (req, res) => {
  bcrypt.hash(req.body.pass, saltRounds).then(async function (hash) {
    let user = new User({
      fName: req.body.fName,
      lName: req.body.lName,
      email: req.body.email,
      pass: hash,
    });

    user = await user.save();
    if (!user) return res.status(500).send("The user cannot be created");
    res.send(user);
  });
});

module.exports = router;
