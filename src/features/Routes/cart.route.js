const express = require("express");
const cartData = require("../Models/cart.model");
const cartRouter = express.Router();

cartRouter.post("/", async (req, res) => {
  console.log("hello");
  try {
    const { body } = req;
    const postData = new cartData(body);
    await postData.save();
    res.send("succesfully added");
  } catch (e) {
    res.send(e.message);
  }
});
cartRouter.get("/", async (req, res) => {
  try {
    let data = await cartData.find({});
    res.send(data);
  } catch (e) {
    res.send(e.message);
  }
});

module.exports = cartRouter;
