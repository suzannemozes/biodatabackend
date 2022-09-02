const express = require('express');
const router = express.Router();
const Fact = require('../models/fact');

// Remember INDUCES

// Index Route
router.get('/', (req, res) => {
    Fact.find({}, (err, foundFact)=>{
        res.json(foundFact);
    });
})

// New - Will be handled by React application
// Delete
router.delete('/:id', (req, res) => {
    Fact.findByIdAndRemove(req.params.id, (err, deletedFact) => {
        res.json(deletedFact);
    });
});

// Update
router.put('/:id', (req, res) => {
    Fact.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedFact) => {
        res.json(updatedFact);
    });
});

// Create
router.post('/', (req, res) => {
    Fact.create(req.body, (err, createdFact) => {
        res.json(createdFact); //.json() will send proper headers in response so client knows it's json coming back
    });
});
// Edit - Will be handled by React application
// Show
router.get('/:id', (req, res)=>{
    Fact.findById(req.params.id, (err, foundFact)=>{
        res.json(foundFact);
    });
});


module.exports = router;