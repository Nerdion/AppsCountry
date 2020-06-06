const puppeteer = require('puppeteer');

(async () => {
    let url = "https://google.com";
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url,{waitUntil: 'networkidle2'});

    await page.waitFor("input[name='q']");
    await page.evaluate(() => {
    });

    await browser.close();
})();