const mongoose = require("mongoose");

const journalSchema = new mongoose.Schema({
  dayswork: String,
  qs: String,
  themes: [String],
  dateyear: Number,
  datemonth: Number,
  dateday: Number,
});

const Journal = mongoose.model("Journal", journalSchema);

module.exports = Journal;
