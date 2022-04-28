
const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;
const mongoURL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.gqrqv.mongodb.net/contacts`;

let _db;

const initDb = callback => {
    if (_db) {
        console.log('Db is already initialized!');
        return callback(null, _db);
    }
    MongoClient.connect(mongoURL)
        .then(client => {
            _db = client;
            callback(null, _db);
        })
        .catch(err => {
            callback(err);
        });
};

const getDb = () => {
    if (!_db) {
        throw Error('Db not initialized');
    }
    return _db;
};

module.exports = {
    initDb,
    getDb
};