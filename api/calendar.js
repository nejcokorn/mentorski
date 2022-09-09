const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {

    

});

// Get list of events
router.get("/event", (req, res) => {
  // At this point you have user id
  req.session.userId;

  // Get user specific list of events from DB
});

router.get("/event/:id", (req, res) => {

});

router.get("/:id", (req, res) => {});


module.exports = router;