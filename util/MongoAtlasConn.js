const mongodb = require('mongodb');
const client = mongodb.MongoClient;

let _db;

const conn = callback => { 
    client.connect()
    .then(c => {
        console.log("MongoAtlas Connected!");
        _db = c.db();
        callback();
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
};

const getDb = () => {
    if(_db){
        return _db;
    }
    throw 'No database found!';
}

exports.conn = conn;
exports.getDb = getDb;