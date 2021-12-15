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

imageUpload(filepath, callback) {

    DB.connect().then(db =>{
        db.run('INSERT INTO images ("filepath") VALUES(?,?)', filepath).then(result => {

        })
       
        //FROM posts JOIN images ON posts.image_id = images.id')
   
            callback(result)
    })
        .catch(err => {
          console.log('post failed to upload:' + err)
})
}}

// postImage(title, body, filename, callback) {
    
//     DB.connect().then(db => {
//         db.run('SELECT * FROM posts JOIN images ON posts.image_id = images.id')
//     })
// }



// Doing a database INSERT with db.run returns a
// lastID. Insert the image data first,
// then use this id as the post.image_id
