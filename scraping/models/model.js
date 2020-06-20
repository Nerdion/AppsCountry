var MongoClient = require('mongodb').MongoClient;


var Credetials =  require('../config')


db_ac = Credetials.DB_AC

url = Credetials.URL
MongoClient.connect(url, { useUnifiedTopology: true } , function(err, db) {
  if (err) throw err;
  console.log("Connected successfully to server");
  module.exports.actual = db.db(Credetials.DB_A);
});

MongoClient.connect(url, { useUnifiedTopology: true}, function(err, db) {
  if (err) throw err;
  module.exports.appscountry = db.db(Credetials.DB_AC);
});

module.exports = class MongoConnect {
  constructor(){
    this.appscountry = Credetials.DB_AC
    this.url = Credetials.URL
  }
  
}















