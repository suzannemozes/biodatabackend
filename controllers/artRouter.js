const express = require('express');
const Art = require('../models/art');
const router = express.Router();

// Remember INDUCES

// Index Route
router.get('/', (req, res) => {
    Art.find({}, (err, foundArt)=>{
        res.json(foundArt);
    });
})

// New - Will be handled by React application
// Delete
router.delete('/:id', (req, res) => {
    Art.findByIdAndRemove(req.params.id, (err, deletedArt) => {
        res.json(deletedArt);
    });
});

// Update
router.put('/:id', (req, res) => {
    Art.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedArt) => {
        res.json(updatedArt);
    });
});

// Create
router.post('/', (req, res) => {
    Art.create(req.body, (err, createdArt) => {
        res.json(createdArt); //.json() will send proper headers in response so client knows it's json coming back
    });
});
// Edit - Will be handled by React application
// Show
router.get('/:id', (req, res)=>{
    Art.findById(req.params.id, (err, foundArt)=>{
        res.json(foundArt);
    });
});


module.exports = router;