const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userDataSchema = new Schema({
  email: { type: String, required: true },
  hash: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  accessToken: { type: String, required: true }
});

const User = mongoose.model("users", userDataSchema);

module.exports = User;
