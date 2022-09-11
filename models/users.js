const { Mysql } = require('./mysql');

class Users extends Mysql {
    constructor() {
        super();
    }

    get(options, callback){

        let { id } = options;

        this.conn.query(`SELECT * FROM users where user_id=${id}`, (err, result, fields) => {
            // if (err) throw err;
            callback(result)
        })
    }
}

module.exports = { Users }