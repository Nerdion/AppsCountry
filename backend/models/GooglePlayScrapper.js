var gplay = require('google-play-scraper');
module.exports = class GooglePlayScrapper {
    constructor() {

    }
    async AppsListByDev(bodyInfo) {
        var data = gplay.developer({ devId: bodyInfo.devName })
        return data
    }
    async AppsCategory() {
        var result = []
        var i = 0;
        var data = await gplay.categories().then((value) => {
            for (let i = 0; i < value.length; i++) {
                var k = i
                let d = { Name: value[i], CategoryID: ++k }
                result.push(d)
            }
            return result
        });
        return data
    }
    // async AppsListByCategory(category) {
    //     // //var category = bodyInfo.category;
    //     //var category = bodyInfo
    //     // var data = await gplay.list({
    //     //     category: gplay.category[category],
    //     //     collection: gplay.collection.TOP_FREE
    //     // }).then((value)=>{
    //     //     return value
    //     // })
    //     // return data
    //     try {
    //         return new Promise(async function (resolve, reject) {
    //             var data = await gplay.list({
    //                 category: gplay.category[category],
    //                 collection: gplay.collection.TOP_FREE,
    //                 num: 2
    //             })
    //             resolve(data);
    //             //console.log(data.length)
    //         });
    //     } catch (e) {
    //         console.log(e)
    //     }

    // }
    async AppsListByCategory(category) {
       // var gplay = require('google-play-scraper');
            try {
                var data = await gplay.list({
                    category: gplay.category[category],
                    collection: gplay.collection.TOP_FREE,
                    num: 200
                  })
                  return new Promise(async function (resolve, reject) {
                    //if(checkUser.)
                    resolve(data)
    
                    // reject("Not Found")
                });
                //   console.log(data)
            } catch (e) {
                console.log(e)
            }
    }
}