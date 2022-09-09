const express = require("express");
const router = express.Router();

// Return all users
router.get('/', (req, res) => {
    res.json({});
});

// Return specific user by id
router.get('/:id', (req, res) => {
    res.json({});
});

module.exports = router;