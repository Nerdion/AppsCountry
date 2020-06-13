const puppeteer = require('puppeteer');
const GoogleSearch = require('./models/GoogleSearch');
const PlayStore = require('./models/PlayStore');

async function myFunc() {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.setViewport({
		width: 720,
		height: 480,
		deviceScaleFactor: 1,
	});
	var t1 = console.time()
	//var data =  await gs.getSearchData()
	//var playStoreData = await new PlayStore().getPlayStoreInfo();
	var googleSearch = await new GoogleSearch(browser,page).getSearchTermsResult("Phone pay");

	//console.log(playStoreData);
	console.log(googleSearch);
	//var countryData=await new GoogleSearch().getCountryName()
	await browser.close();
	console.timeEnd()

}

myFunc();