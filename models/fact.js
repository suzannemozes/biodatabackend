const mongoose = require('mongoose');

const factSchema = new mongoose.Schema({
    title: String,
    people: [],
    place: String,
    year: Number,
    month: Number,
    day: Number,
});

const Fact = mongoose.model('Fact', factSchema);

module.exports = Fact;