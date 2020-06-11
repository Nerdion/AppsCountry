const countryDetector = require("country-in-text-detector");

module.exports = class GoogleSearch {
	constructor(browser, page) {
		this.browser = browser
		this.page = page
	}

	async getSearchTermsResult(name) {
		var resultData = [];
		var searchterm = ["", "country", "headquarters country", "owners country", "parent company"];
		var priority = [0.1, 0.3, 0.4, 0.6, 0.8]
		for (let i = 0; i < 1; i++) {
			let data = await this.getSearchData(name + " " + searchterm[i])
			let a = `${searchterm[i]}_Result`;
			resultData.push({
				key: a,
				Result: data,
				priority: priority[i]
			})
		}
		var countryData = await this.getCountryName(resultData)
		return countryData;
	}
	async getSearchData(name) {
		//let appName = 'com.brave.browser';
		let url = "https://google.com/search?q=" + name;
		//const browser = await puppeteer.launch();
		await this.page.goto(url, { waitUntil: 'networkidle2' });
		console.log("page")
		let myData = await this.page.evaluate(() => {
			let topResults = document.querySelectorAll('.st');
			let appDescription = document.querySelector('#kp-wp-tab-overview > div:nth-child(1)');
			var result = [];
			for (let i = 0; i < topResults.length; i++) {
				result.push(topResults[i].innerText);
			}
			result.push(appDescription);
			return result
		});

		//await browser.close();
		return myData;
	}

	async getCountryName(result) {
		var country = [];
		for (let i = 0; i < result.length; i++) {
			var data = []
			var phraseData = result[i].Result;
			for (let j = 0; j < phraseData.length; j++) {
				if (phraseData[j] != '') {
					data.push(countryDetector.detect(phraseData[j]))
				}
			}
		}
		return country;
	}
	async hellWorld() {
		await console.log("working");
	}
};
