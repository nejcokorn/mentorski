const express = require("express");
const router = express.Router();

router.post("/basic", (req, res) => {

    // Query DB to get the user
    req.body.username
    req.body.password

    // Error out if user was not found

    // User with that password exist at this point
    // Store user into session
    req.session.user = 1; // Set user id from DB

});

router.post("/apikey", (req, res) => {});

module.exports = router;

