const express = require("express");

const user = require("./user");
const calendar = require("./calendar");
const settings = require("./settings");

const api = express.Router();

api.use("/user", user);
api.use("/calendar", calendar);
api.use("/settings", settings);

module.exports = api;