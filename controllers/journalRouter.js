const express = require("express");
const Journal = require("../models/journal");
const router = express.Router();

// Remember INDUCES

// Index Route
router.get("/", (req, res) => {
  Journal.find({}, (err, foundJournal) => {
    res.json(foundJournal);
  });
});

// New - Will be handled by React application
// Delete
router.delete("/:id", (req, res) => {
  Journal.findByIdAndRemove(req.params.id, (err, deletedJournal) => {
    res.json(deletedJournal);
  });
});

// Update
router.put("/:id", (req, res) => {
  Journal.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedJournal) => {
      res.json(updatedJournal);
    }
  );
});

// Create
router.post("/", (req, res) => {
  Journal.create(req.body, (err, createdJournal) => {
    res.json(createdJournal); //.json() will send proper headers in response so client knows it's json coming back
  });
});
// Edit - Will be handled by React application
// Show
router.get("/:id", (req, res) => {
  Journal.findById(req.params.id, (err, foundJournal) => {
    res.json(foundJournal);
  });
});

module.exports = router;
