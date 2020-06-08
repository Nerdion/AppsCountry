const puppeteer = require('puppeteer');

let packageName = 'com.brave.browser';

(async () => {
	let url = "https://play.google.com/store/apps/details?id=" + packageName;
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
	let developerName = await page.evaluate(() => { 
		return document.querySelectorAll("a[href*='/store/apps/dev']")[0].textContent;
	});
	console.log(developerName);
	await browser.close();
})();