const getDb = require('../util/MongoAtlasConn').getDb;

class User{
    constructor(username, firstname, lastname, password, id){
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
        if(id){
            this._id = id;
        }
    }

    save(){
        const db = getDb();
        return db.collection('users').insertOne(this)
            .then()
            .catch(err => { console.log(err); });
    }
}

module.exports = User;