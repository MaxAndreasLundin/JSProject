const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please adda title"],
    unique: true,
    trim: true,
    maxlength: [40, "Title max amount of characters is 40"],
  },
  description: {
    type: String,
    required: true,
    maxlength: [200, "Description max amount of characters is 200"],
  },
});

module.exports = mongoose.models.Card || mongoose.model("Card", CardSchema);
