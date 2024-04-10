const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, "Email is required"],
    // validate: [validator.isEmail, "Please provide a valide email"],
  },
  password: {
    type: String,
  },
});

module.exports = User = mongoose.model("User", userSchema);
