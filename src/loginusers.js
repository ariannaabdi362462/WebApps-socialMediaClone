const DB = require('./webApps.js')
const UUID = require('uuid')

module.exports = {
    login(username, password, callback){
    
        DB.connect().then(db => {
        db.get('SELECT * FROM users WHERE username = ? AND password = ?', username, password).then(result => {

            if (result && !result.token){
        callback(result)
}
            }
            )}
   
