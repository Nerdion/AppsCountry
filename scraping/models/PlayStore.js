const puppeteer = require('puppeteer');
var mongo = require('./model')
module.exports =  class PlayStore {
    constructor(pkgname) {
        this.packagename=pkgname
    }

    async getPlayStoreInfo() {
        let url = "https://play.google.com/store/apps/details?id=" + this.packagename;
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setViewport({
            width: 1080,
            height: 720,
            deviceScaleFactor: 1,
        });
        await page.goto(url, { waitUntil: 'networkidle2' });
        await page.screenshot({ path: 'ss/example.png' });
        await page.waitForSelector("a[href*='/store/apps/dev']");
        var developerName = await page.evaluate(() => { 
            return document.querySelectorAll("a[href*='/store/apps/dev']")[0].textContent;
        });
        
        var appDetails = await page.evaluate(() => {
            var myData = document.querySelectorAll('.hAyfc:last-child > span > div > span > div');
            var finalData = {};
            myData.forEach(function (e) {
                if(e.innerText == "Visit website") {
                    finalData["websiteLink"] = e.querySelector('a').href;
                }
            });
            finalData["address"] = myData[myData.length-1].innerText;
            //console.log(finalData);
            return finalData;
        });

        //console.log({"devName" : developerName, "websiteLink" : appDetails.websiteLink, "address" : appDetails.address});
        
        await browser.close();
        return {"devName" : developerName, "websiteLink" : appDetails.websiteLink, "address" : appDetails.address};
    }
}