const DB = require('./db.js')
const UUID = require('uuid')
const db = require('./db.js')

module.exports = {

    insertPost(title, body, callback) {
        DB.connect().then(db => {
            db.run('INSERT INTO posts("title", "body") VALUES(?,?)', title, body).then(result => {
                callback()
            })
        .catch(err => {
            console.log('post failed to upload:' + err )
        })
        
    })

},

getPosts(offset, limit, callback) {

    DB.connect().then(db => {
        db.all('SELECT * FROM posts("offset", "limit") ORDER BY id DESC LIMIT ? OFFSET ?').then(result => {

            callback(result)
        })
.catch(err => {
    console.log('post failed to upload:'+ err)
         })
    })
}}    
