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
  const { email } = req.body;
  User.findOne({ email: email }, (err, result) => {
    if (result) {
      res.send({
        message: "Email already exists.",
        alert: false,
      });
    } else {
      bcrypt.hash(req.body.pass, saltRounds).then(async function (hash) {
        let user = new User({
          fName: req.body.fName,
          lName: req.body.lName,
          email: req.body.email,
          pass: hash,
        });

        user = await user.save();
        if (!user) {
          return res.status(500).send({
            message: "Can't Sign in",
            alert: false,
          });
        }
        res.send({
          message: "Signup Successful",
          alert: true,
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  // console.log(req.body);
  const { email, pass } = req.body;
  User.findOne({ email: email }, (err, result) => {
    if (result) {
      bcrypt.compare(pass, result.pass).then(function (result_pass) {
        if (result_pass) {
          // result == true'
          const dataSend = {
            _id: result._id,
            fName: result.firstName,
            lName: result.lastName,
            email: result.email,
          };
          console.log(dataSend);
          res.send({
            message: "Login is successful",
            alert: true,
            data: dataSend,
          });
        } else {
          res.send({
            message: "Password incorrect",
            alert: false,
          });
        }
      });
    } else {
      res.send({
        message: "Email is not available, please sign up",
        alert: false,
      });
    }
  });
});

module.exports = router;
