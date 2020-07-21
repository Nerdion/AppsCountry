var MongoClient = require('mongodb').MongoClient;
var mongodb = require('mongodb');
var gridfs =  require('mongodb').GridFSBucket;

var Credetials =  require('../config')
var fs = require('fs');

db_ac = Credetials.DB_AC
url = Credetials.URL

MongoClient.connect(url, { useNewUrlParser: true} , function(err, db) {
  if (err) throw err;
  module.exports.appscountry = db.db(Credetials.DB_AC);
});