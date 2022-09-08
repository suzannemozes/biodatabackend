const express = require("express");
const router = express.Router();
const Character = require("../models/char");

// Character Index Route
router.get("/characters", (req, res) => {
  Character.find({}, (err, foundCharacter) => {
    res.json(foundCharacter);
  });
});

// Character Create Route
router.post("/characters", (req, res) => {
  Character.create(req.body, (err, createdCharacter) => {
    res.json(createdCharacter);
  });
});

//Character Show Rote
router.get("/characters/:id", (req, res) => {
  Character.findById(req.params.id, (err, foundCharacter) => {
    res.json(foundCharacter);
  });
});

// Character Delete Route
router.delete("/characters/:id", (req, res) => {
  Character.findByIdAndRemove(req.params.id, (err, deletedCharacter) => {
    res.json(deletedCharacter);
  });
});

// Character Update Route
router.put("/characters/:id", (req, res) => {
  Character.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedCharacter) => {
      res.json(updatedCharacter);
    }
  );
});

module.exports = router