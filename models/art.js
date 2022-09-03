const mongoose = require("mongoose");

const artSchema = new mongoose.Schema({
  title: String,
  artist: String,
  people: String,
  dateyear: Number,
  datemonth: Number,
  dateday: Number,
});

const Art = mongoose.model("Art", artSchema);

module.exports = Art;
