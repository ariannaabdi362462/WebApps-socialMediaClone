const DB = require('./db.js')
const UUID = require('uuid')

module.exports = {

    insertPost(title, body, callback) {
        DB.connect().then(db => {
            db.run('INSERT INFO posts("title", "body") VALUES (?,?)', title,body).then(result =>{
                callback()
            })
        .catch(err => {
            console.log('post failed to upload:' +err )
        })
        })
    }

}