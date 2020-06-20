const puppeteer = require('puppeteer');
const GoogleSearch = require('./models/GoogleSearch');
const PlayStore = require('./models/PlayStore');
const GooglePlayScrapper = require('./models/GooglePlayScrapper')
const mongo = require('./models/model')
async function myFunc() {
    try{
      let db = await mongo.actual.collection("UserProfile").find({},{ fields: { "Name":1 }}).toArray();        
      console.log(db,"shriyash")
    }catch(error){
        console.log(error)
    }
    //var data = await new GooglePlayScrapper().AppsCategory();
   // var db = await mongo.appscountry.collection("GPlayCategory").insertMany(data)
    // var data = await new GooglePlayScrapper().AppsListByDev('Google LLC')
    //console.log(categories)
    //for(let i=0;i<categories[0])
  //  var appsListByCategory=await new GooglePlayScrapper().AppsListByCategory('GAME_ACTION')
    //console.log(db,"asd")
  //  console.log(appsListByCategory)
}

myFunc();