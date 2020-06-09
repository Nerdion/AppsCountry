const puppeteer = require('puppeteer');

packageName = 'com.nextbillion.groww';

(async () => {
    console.log("here");
    let url = "https://play.google.com/store/apps/details?id=" + packageName;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 1080,
        height: 720,
        deviceScaleFactor: 1,
    });
    console.log("here");
    await page.goto(url,{waitUntil: 'networkidle2'});
    await page.waitUntil(5000);
    await page.screenshot({path: 'ss/example.png'});
    
    await browser.close();
});