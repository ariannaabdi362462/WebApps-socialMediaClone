const express = require('express')
const app = express()
const port = 3000

const users = require('./src/users.js')
const posts = require('./src/posts.js')
const funcs = require('./src/funcs.js')

const { request } = require('express')

const UUID = require('uuid')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, callback){
    callback(null, './public/uploads')
  },
  filename: function (req, file, callback){
    callback(null ,UUID.v4() +'-' + file.originalname)
  }
})

  const upload = multer({
    storage: storage
  })

// Tell Express to serve HTML, JS, CSS etc from the public/ folder
// See: http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))
app.use(express.json())

// Our API routes will be here
app.post('/api/login', function (req, res) {
  // Return the response by calling our function
  console.log(req.body)
 //checks if username and password are entered. 
 users.login(req.body.username, req.body.password, result => {
  // result might be 'undefined', which is *not* valid JSON, but 'false' is
  if (!result) {
    result = false
  }

  res.json(result)
})  

function okResponse(res, code) {
  res.status(code).send({})
}

function notAllowed(res) {
  res.status(401).send({
      error: "Not authorised"
  })
}

// app.post('/api/post', function(req ,res){
  
//   posts.insertPost(req.body.title, req.body.body, result =>
//      {
   
  
//     res.send({});
//  //   res.json(result)
//   }) 
  
   
//   console.log(req.body);
 

// })
// })

app.get('/api/posts', (req,res) => {
  let limit = 3
  let offset = req.query.offset

  posts.getPosts(offset, limit, (result) => {
    console.log(result)
    res.send(result)
  })
})


app.post('api/post', upload.single('image'), function (req,res){
  console.log(req.body, req.file)
  res.send({})
})


// Tell us where we're running from
console.log("Server running on http://localhost:" + port)
app.listen(port)

}) 
