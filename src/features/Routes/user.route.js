const express = require("express");

// const UserSchema = require("../Models/user.model");
const jwt = require("jsonwebtoken");
const UserModel = require("../Models/user.model");
const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
  console.log(req.body);
  try {
    const { username, email, password } = req.body;
    let oldUser = await UserModel.findOne({ email });
    if (oldUser) {
      return res.send({ msg: "already" });
    }
    // bycrypt.hash(password, 4, async function (err, hash) {
    const user = new UserModel({ username, email, password });
    await user.save();
    res.send({ msg: "success" });
    // });
  } catch (e) {
    res.send(e.message);
  }
});
userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await UserModel.findOne({ email });
    if (user) {
      let hashed_password = user.password;
      // bycrypt.compare(password, hashed_password, function (err, result) {
      if (hashed_password == password) {
        const token = jwt.sign({ userID: user._id }, "hush");
        res.send({ msg: "success", token: token });
      } else {
        res.send({ msg: "incorrect password" });
      }
      // });
    } else {
      res.send({ msg: "email not resgisterd" });
    }
  } catch (e) {
    res.send(e.message);
  }
});
module.exports = userRouter;
