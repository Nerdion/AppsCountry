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
        var result = [];
        for(let i=0; i<topResults.length; i++) {
            result.push(topResults[i].innerText);
        }

        return {
            result
        }
    });

    console.log(myData);
    await browser.close();
})();