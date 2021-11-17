const Sqlite = require('sqlite')
const sqlite3 = require('sqlite3');
const { connect } = require('../webApps/web-apps/Week 5/code/src/database');
const dbFilename= './webApps.db'

sqlite3.verbose();

sqlite3.open ({
  filename: dbFilename,
  driver:sqlite3.Database

})
//module.exports = {
connect.then(db =>{
        return Sqlite.open({
            filename: dbFilename,
            driver: Sqlite3.Database
        })
})

    .catch(err => {
    console.log('DB.connect failed with error:' + err)
})
