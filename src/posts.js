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
        db.all('SELECT * FROM posts ORDER BY id DESC LIMIT ? OFFSET ?', limit, offset).then(result => {

            callback(result)
        })
        // .catch(err => { 
        //      console.log('post failed to upload:'+ err)
        //  })
    })
},   

imageUpload(filename, callback) {

    DB.connect().then(db =>{
        db.run('INSERT INTO images ("filename") VALUES(?,?)', filename).then(result => {

            callback(result)
        })
       
   
    })
    .catch(err => {
        console.log('post failed to upload:' + err)
    })
},

postImage(title, body, filename, callback) {
    
    DB.connect().then(db => {
        db.run('SELECT * FROM posts JOIN images ON posts.image_id = images.id'). then(result => {
            callback(result)
        })
  
    })
    .catch(err => {
        console.log('post failed to upload:' +err)
    })
},

postComment(body, callback){

    DB.connect().then(db => {
        db.run('SELECT * from comments WHERE post_id = ? ORDER BY id ASC'). then(result => {
            callback(result)
        })
    })
    .catch(err => {
        console.log('post failed to upload:' +err)
    })
},

}