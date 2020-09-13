// const puppeteer = require('puppeteer');
// var Credetials =  require('./config')
var mongo = require('./models/model')
// var gplay = require('google-play-scraper');
// const GoogleSearch = require('./models/GoogleSearch');
// const PlayStore = require('./models/PlayStore');
const GooglePlayScrapper = require('./models/GooglePlayScrapper')
async function myFunc() {
    var result=[]
    var data=[]
    var categories = await new GooglePlayScrapper().AppsCategory();
    for(let i=0;i<categories.length;i++){
      let category=categories[i]["Name"]
      var appListByCatecory=await new GooglePlayScrapper().AppsListByCategory(category)
     //var  appListByCatecory = await new GooglePlayScrapper().applist();
      //console.log(data.length)
      // for(let j=0;j<appListByCatecory.length;j++){
      //   if(!data.includes(appListByCatecory[i]['developer'])){
      //     data.push(appListByCatecory[j]['developer'])
      //   }
      // }    
      var data = await mongo.appscountry.collection('apps').insertMany(appListByCatecory)
      console.log(category,"  ",appListByCatecory.length) 
    }

    // console(ca)
    //var db = await mongo.appscountry.collection("GPlayCategory").insertMany(data)
    // for(let k=0 ;k<data;k++){
    //   let devname = data[k]
    //   var data = await new GooglePlayScrapper().AppsListByDev(devname)
    //   console.log("Pushed__",k)
    //   result.push({DevName:devname,AppList:data})
    // }
    //var data = await new GooglePlayScrapper().AppsListByDev('Google LLC')
    //console.log(categories)
    //for(let i=0;i<categories[0])
  //  var appsListByCategory=await new GooglePlayScrapper().AppsListByCategory('GAME_ACTION')
    //console.log(db1,"asd")
  //  console.log(appsListByCategory)

 
}
myFunc()
// async function myFunc1(){

// gplay.list({
//     category: gplay.category.GAME_ACTION,
//     collection: gplay.collection.TOP_FREE,
//     num: 30
//   })
//   .then(console.log, console.log);
// }
// myFunc1();