var gplay = require('google-play-scraper');
module.exports = class GooglePlayScrapper {
    constructor() {

    }
    async AppsListByDev(devName) {
        var data = gplay.developer({ devId: devName })
        return data
    }
    async AppsCategory() {
        var result = []
        var i = 0;
        var data = await gplay.categories().then((value) => {
            for (let i = 0; i < value.length; i++) {
                var k=i
                let d = { Name: value[i], CategoryID: ++k }
                result.push(d)
            }
            return result
        });
        return data
    }
    async AppsListByCategory(category) {
        var data = gplay.list({
            category: gplay.category[category],
            collection: gplay.collection.TOP_FREE
        })
        return data
    }
}