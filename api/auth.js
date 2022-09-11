const express = require("express");
const router = express.Router();
const { Users } = require("../models/users");

// // prepare mySQL
// const dbName = 'warehouse'
// const mysql = require('mysql');
// let connection = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     database: dbName
// });

// // connect to database named 'warehouse'
// connection.connect((err) => {
//     if (err) {
//         console.log("Connection error: " + err.message);
//     } else {
//         console.log("Connected to database: " + dbName);
//     }
    
// });
// // example of simple query
// connection.query("select * from users", (err, result, fields) => {
//     if (err) {
//         console.log("error: " + err);
//     }
//     console.log(result);
// });


router.get("/basic", (req, res) => {

    new Users().get({ id: 1}, (data) => {
        res.json(data);
    });

    // Query DB to get the user
    // req.body.username
    // req.body.password

    
    // Error out if user was not found

    // User with that password exist at this point
    // Store user into session
    // req.session.user = 1; // Set user id from DB

});

router.post("/apikey", (req, res) => {});

module.exports = router;

