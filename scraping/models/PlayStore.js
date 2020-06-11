const puppeteer = require('puppeteer');

module.exports =  class PlayStore {
    constructor() {
    }

    async getPlayStoreInfo() {
        let url = "https://play.google.com/store/apps/details?id=" + 'com.brave.browser';
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
        
        var appInfo = await page.evaluate(() => {
            var myVar = Array.from(document.querySelectorAll('.hAyfc:last-child > span > div > span > div').map(
                myData => myData.innerText.trim()
            ));

            return {
                myVar
            }
        });

        await console.log(appInfo);
        await console.log(developerName);
        await browser.close();
    }
}