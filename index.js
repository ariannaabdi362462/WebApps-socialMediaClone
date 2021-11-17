const express = require('express')
const app = express()
const port = 3000
const Sqlite = require('sqlite')
const sqlite3 = require('sqlite3')
// You can require your own code as well...
const funcs = require('./src/funcs.js')

const dbFilename= './webApps.db'

sqlite3.verbose();

sqlite3.open ({
  filename: dbFilename,
  driver:sqlite3.Database

})

.then(db =>{
//db stuff 
})

.catch(err =>{
  console.log('DB.connect failed with error:' + err)
})
// Tell Express to serve HTML, JS, CSS etc from the public/ folder
// See: http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))
app.use(express.json())
// Our API routes will be here
app.post('/api/login', function (req, res) {
  // Return the response by calling our function

console.log(req.body)
  res.send({});


  //  res.send(funcs.myFunction());
})

// Tell us where we're running from
console.log("Server running on http://localhost:" + port)
app.listen(port)
