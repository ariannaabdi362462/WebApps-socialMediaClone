const DB = require('./db.js')
const UUID = require('uuid')
const db = require('./db.js')

module.exports ={
    postComment(body, postId, userId, callback){
        DB.connect().then(db => {
            db.run('INSERT INTO comments("body", "post_id", "user_id") VALUES(?,?,?)', body, postId, userId )
            .then(result => {
                callback(result)
            })
        .catch(err => {
            console.log('post failed to upload:' + err )
        })
        
    })
},

Comment(body, callback){

    DB.connect().then(db => {
        db.run('SELECT * from comments WHERE post_id = ? ORDER BY id ASC', body). then(result => {
            callback(result)
        })
    })
    .catch(err => {
        console.log('post failed to upload:' +err)
    })
}
}