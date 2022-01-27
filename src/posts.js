const DB = require('./db.js')
const UUID = require('uuid')
const db = require('./db.js')

module.exports = {

    insertPost(title, body, imageId, callback) {
        DB.connect().then(db => {
            db.run('INSERT INTO posts("title", "body", "images_id") VALUES(?,?,?)', title, body, imageId).then(result => {
                callback()
            })
        .catch(err => {
            console.log('post failed to upload:' + err )
        })
        
    })

},

getPosts(offset, limit, callback) {

    DB.connect().then(db => {
        db.all('SELECT * FROM posts LEFT JOIN images ON posts.images_id = images.id ORDER BY id DESC LIMIT ? OFFSET ?', 
        limit, offset)
        .then(result => {
        callback(result)
        })
        .catch(err => { 
             console.log('Get posts failed to upload:'+ err)
         })
    })
},   

imageUpload(filename, callback) {

    DB.connect().then(db =>{
        db.run('INSERT INTO images("filename") VALUES(?)', filename).then(result => {

            callback(result)
        })
       
   
    
    .catch(err => {
        console.log('image failed to upload:' + err)
    })
})
},
}

// postImage(title, body, filename, callback) {
    
//     DB.connect().then(db => {
//         db.run('SELECT * FROM posts JOIN images ON posts.image_id = images.id', title, body, filename). then(result => {
//             callback(result)
//         })
  
//     })
//     .catch(err => {
//         console.log('post failed to upload:' +err)
//     })
// },
// }


