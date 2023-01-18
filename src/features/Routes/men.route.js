const express = require("express");
const menData = require("../Models/men.model");
const menRouter = express.Router();

menRouter.get("/", async (req, res) => {
  let data = await menData.find({});
  res.send(data);
});

module.exports = menRouter;
