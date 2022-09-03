const mongoose = require("mongoose");

const charSchema = new mongoose.Schema({
  name: String,
  dobyear: Number,
  dobmonth: Number,
  dobday: Number,
});

const Char = mongoose.model("Char", charSchema);

module.exports = Char;
