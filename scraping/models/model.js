var MongoClient = require('mongodb').MongoClient;
var Credetials =  require('../config')
var db_ac = Credetials.DB_A
var url = Credetials.URL


// MongoClient.connect(url, { useUnifiedTopology: true}, function(err, db) {
//   if (err) {
//     console.log(err)
//     throw err
//   };
//   console.log("Connected successfully to server");
//   module.exports.appscountry = db.db(db_ac)
// });


module.exports = class MongoConnect {
  constructor(DB,URL,con){
    this.dataBase = DB
    this.url = URL
    this.appsCountry=con
  }
  getConnection(){
    MongoClient.connect(this.url, { useUnifiedTopology: true}, function(err, db) {
      if (err) throw err;
      this.appsCountry=db
       const appscountry = db.db(this.dataBase)
      return appscountry
    });
  }

  closeConnection(){
    this.appsCountry.close();
  }
}
// const MongoClient = require('mongodb').MongoClient;
// var Credetials =  require('../config')
// db_ac = Credetials.DB_AC
//  class DB {

//     constructor() {
//         // this.url = url;
//         // this.dbName = dbName;
//     }

//     connect() {
//         console.log('connecting to database ' + this.dbName + ' with URL ' + this.url);
//         return new Promise((resolve, reject) => {
//             MongoClient.connect(this.url, (err, client) => {
//                 if (err) {
//                     reject(err);
//                 } else {
//                     console.log("connected succesfully")
//                     global.database = client.db(this.dbName);
//                     resolve(client.db(this.dbName));
//                 }
//             });
//         })

//     }
// };