const puppeteer = require('puppeteer');
const countryDetector = require("country-in-text-detector");

module.exports =  class GoogleSearch {
	constructor() {
		//   var searchdata=await this.getSearchData();
		//   console.log("result data",searchdata);
		//   var countrydata=await this.getCountryName(searchdata);
		//   console.log("country name data",countrydata)
	}

	async getSearchData() {
		let appName = 'TikTok';
		let url = "https://google.com/search?q=" + appName;
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		await page.setViewport({
			width: 1080,
			height: 720,
			deviceScaleFactor: 1,
		});
		await page.goto(url, { waitUntil: 'networkidle2' });
		console.log("outside")
		let myData = await page.evaluate(() => {
			let topResults = document.querySelectorAll('.st');
			let appDescription = document.querySelector('#kp-wp-tab-overview > div:nth-child(1)');
			var result = [];
			for (let i = 0; i < topResults.length; i++) {
				result.push(topResults[i].innerText);
			}
			result.push(appDescription);

			return {
				result
			}
		});

		console.log("result", myData)
		return myData;
	}

	async getCountryName(result) {
		var country = [];
		for (let i = 0; i < result.length; i++) {
			let data = countryDetector.detect(result[i])
			country.push(data)
		}
		return country;
	}

	async hellWorld() {
		await console.log("working");
	}
};
