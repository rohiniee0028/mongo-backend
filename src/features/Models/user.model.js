const { Schema, model } = require("mongoose");
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: String,
});

const UserModel = model("user", UserSchema);
module.exports = UserModel;
