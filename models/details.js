const mongoose = require("mongoose");

const detailsSchema = new mongoose.Schema({
    details: {
    type: Array,
  },
});

module.exports = Details = mongoose.model("Details", detailsSchema);
