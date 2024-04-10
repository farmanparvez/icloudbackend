const mongoose = require("mongoose");

const statusSchema = new mongoose.Schema({
    status: {
    type: String,
  },
});

module.exports = Status = mongoose.model("Status", statusSchema);
