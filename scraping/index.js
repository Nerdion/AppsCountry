<<<<<<< HEAD
var GoogleSearch = require('./models/GoogleSearch');

 async()=> {
     
        console.log("Errorasdsa")
        var data = await new GoogleSearch().getSearchData()
        console.log(data)

}
=======
const puppeteer = require('puppeteer');

let appName = 'TikTok';

(async () => {
    let url = "https://google.com/search?q=" + appName;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 1080,
        height: 720,
        deviceScaleFactor: 1,
      });
    await page.goto(url,{waitUntil: 'networkidle2'});
    await page.screenshot({path: 'ss/example.png'});

    let myData = await page.evaluate(() => {
        let topResults = document.querySelectorAll('.st');
        let appDescription = document.querySelector('#kp-wp-tab-overview > div:nth-child(1)');
        var result = [];
        for(let i=0; i<topResults.length; i++) {
            result.push(topResults[i].innerText);
        }

        result.push(appDescription);

        return {
            result
        }
    });

    console.log(myData);
    await browser.close();
})();
>>>>>>> e941dd09a041921906b4e524d16aa67d96711cb2
