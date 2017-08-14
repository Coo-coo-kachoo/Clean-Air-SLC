const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
let Schema = mongoose.Schema;

let userSchema = new Schema ({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  priv: {
    type: String,
    enum: ["admin", "user"],
    default: "user"
  }
});

user


module.exports = mongoose.model("users", userSchema);
