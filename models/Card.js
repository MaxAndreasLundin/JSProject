const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
    unique: true,
    trim: true,
    maxlength: [40, "Title max amount of characters is 40"],
  },
  description: {
    type: String,
    required: true,
    maxlength: [200, "Description max amount of characters is 200"],
  },
  place: {
    type: String,
    required: true,
    maxlength: [40, "Max amount of characters is 40"],
  },
  date: {
    type: String,
    required: true,
    maxlength: [40, "Max amount of characters is 40"],
  },
  time: {
    type: String,
    required: true,
    maxlength: [6, "Max amount of characters is 6"],
  },
  name: {
    type: String,
    required: true,
    maxlength: [10, "Max amount of characters is 6"],
  },
  avatar: {
    type: String,
    required: true,
    maxlength: [200, "Max amount of characters is 200"],
  },
});

module.exports = mongoose.models.Card || mongoose.model("Card", CardSchema);
