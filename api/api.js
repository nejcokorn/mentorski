const express = require("express");

const auth = require("./auth");
const user = require("./user");
const calendar = require("./calendar");
const settings = require("./settings");

const api = express.Router();

api.use((req, res, next) => {
    // Skip exceptions auth... etc

    // Return error if user is not logged in

    // Call next if user is logged in
    next();
});

api.use("/auth", user);
api.use("/user", user);
api.use("/calendar", calendar);
api.use("/settings", settings);

module.exports = api;