const DB = require('./db.js')
const UUID = require('uuid')

module.exports = {

    insertPost(title, body, callback) {
        DB.connect().then(db => {
            db.run
        })
    }

}