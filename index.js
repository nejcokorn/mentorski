const express = require('express');
const cookieParser = require("cookie-parser");
const path = require('path');

const session = require("express-session");
const SQLiteStore = require("connect-sqlite3")(session);

const api = require('./api/api');

// Init express
const app = express();

// cookie
app.use(cookieParser());

// Session handler
app.use(session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: true
}));


app.use('/api', api);

// Serve front-end
app.use(express.static(path.join(__dirname, "public/dist/calendar")));

app.use((req, res, next) => {
    res.send(path.join(__dirname, "public/dist/calendar/index.html"));
})

app.listen(3000);