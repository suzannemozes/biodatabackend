const express = require("express");
const Char = require("../models/char");
const router = express.Router();

// Remember INDUCES

// Index Route
router.get("/", (req, res) => {
  Char.find({}, (err, foundChar) => {
    res.json(foundChar);
  });
});

// New - Will be handled by React application
// Delete
router.delete("/:id", (req, res) => {
  Char.findByIdAndRemove(req.params.id, (err, deletedChar) => {
    res.json(deletedChar);
  });
});

// Update
router.put("/:id", (req, res) => {
  Char.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedChar) => {
      res.json(updatedChar);
    }
  );
});

// Create
router.post("/", (req, res) => {
  Char.create(req.body, (err, createdChar) => {
    res.json(createdChar); //.json() will send proper headers in response so client knows it's json coming back
  });
});
// Edit - Will be handled by React application
// Show
router.get("/:id", (req, res) => {
  Char.findById(req.params.id, (err, foundChar) => {
    res.json(foundChar);
  });
});

module.exports = router;
