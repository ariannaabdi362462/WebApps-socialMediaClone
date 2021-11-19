const express = require('express')
const app = express()
const port = 3000

const funcs = require('./src/funcs.js')
const { request } = require('express')



// Tell Express to serve HTML, JS, CSS etc from the public/ folder
// See: http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))
app.use(express.json())

// Our API routes will be here
app.post('/api/login', function (req, res) {
  // Return the response by calling our function
  console.log(req.body)
 //checks if username and password are entered. 
  if(req.body.username == 'username' && req.body.password == 'password'){
    res.send(true);
  }
else {
  res.send(false);
}
  //  res.send(funcs.myFunction());
})

// Tell us where we're running from
console.log("Server running on http://localhost:" + port)
app.listen(port)
