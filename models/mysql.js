// prepare mySQL
const dbName = 'warehouse'
const mysql = require('mysql');
const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: dbName
});

// connect to database named 'warehouse'
conn.connect((err) => {
    if (err) {
        console.log("Connection error: " + err.message);
    } else {
        console.log("Connected to database: " + dbName);
    }
});


class Mysql {
    constructor() {
        this.conn = conn;
    }
}

module.exports = { Mysql }