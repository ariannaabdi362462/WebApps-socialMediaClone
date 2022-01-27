const DB = require('./db.js')
const UUID = require('uuid')
const db = require('./db.js')

app.post('/posts/:postId/like', (req,res)=>{
    let postId = req.params.postId // Get the post id from the route parameter
    let apiToken = req.get('X-API-Token') 
    
    if(apiToken){
        users.findByToken(apiToken, user =>{
            db.connect().then(db =>{
                db.get('SELECT * FROM likes WHERE user_id = ? AND post_id = ?', user.id, postId). then(result =>{
                    if(result){
                        
                    }
                })
            })
        })
    }
})