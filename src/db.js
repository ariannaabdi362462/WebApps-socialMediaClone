const sqlite = require('sqlite')
const sqlite3 = require('sqlite3')

const dbFilename = './webApps.db'

sqlite3.verbose();

module.exports = {
    connect() {
        return sqlite.open({
            filename: dbFilename,
            driver: sqlite3.Database
        })
        .catch(err => {
            console.log('DB.connect failed with error:' + err)
        })  
    }
}
