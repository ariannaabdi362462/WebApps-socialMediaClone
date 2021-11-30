const DB = require('./db.js')
const UUID = require('uuid')

module.exports = {
    
    login(username, password, callback) {
        DB.connect().then(db => {
           
            db.get('SELECT * FROM users WHERE username = "' + username + '" AND password = "' + password + '"').then(result => {
           
                // if (result && !result.token) {
                //     let token = UUID.v4();
                //     db.run('UPDATE users SET token = ? WHERE id = ?', token, result.id).then(() => {
                //         result.token = token
                //         callback(result)
                //     })
                // }
                // else {
                //     callback(result)
                // }
                callback(result)
            })
            .catch(err => {
                console.log('users.login failed with error:' + err)
            })
        })
    },

    findByToken(token) {
        DB.connect().then(db => {
            db.get('SELECT * FROM users WHERE token = ?', token).then(result => {
                callback(result)
            })
            .catch(err => {
                console.log('users.findByToken failed with error:' + err)
            })
        })
    }

}
