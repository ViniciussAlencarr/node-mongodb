const mongo = require('mongoose');

mongo.connect('mongodb://localhost/noderestapi', { useMongoClient: true }); 
mongo.Promise = global.Promise;

module.exports = mongo;