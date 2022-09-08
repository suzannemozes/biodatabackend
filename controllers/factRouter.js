const express = require("express");
const router = express.Router();
const Fact = require("../models/fact");

// FACT ROUTES

// Fact Index Route
router.get("/facts", (req, res) => {
  Fact.find({}, (err, foundFact) => {
    res.json(foundFact);
  });
});

// Fact Create Route
router.post("/facts", (req, res) => {
  Fact.create(req.body, (err, createdFact) => {
    res.json(createdFact);
  });
});

// Fact Show Route
router.get("/facts/:id", (req, res) => {
  Fact.findById(req.params.id, (err, foundFact) => {
    res.json(foundFact);
  });
});

// Fact Delete Route
router.delete("/facts/:id", (req, res) => {
  Fact.findByIdAndRemove(req.params.id, (err, deletedFact) => {
    res.json(deletedFact);
  });
});

// Fact Update Route
router.put("/facts/:id", (req, res) => {
  Fact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedFact) => {
      res.json(updatedFact);
    }
  );
});

module.exports = router