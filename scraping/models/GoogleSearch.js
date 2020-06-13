const countryDetector = require("../country-detector/index");
module.exports = class GoogleSearch {
	constructor(browser, page) {
		this.browser = browser
		this.page = page
	}

	async getSearchTermsResult(name) {
		var resultData = [];
		var searchterm = ["", "country", "headquarters country", "owner headquarter country", "parent company country","parent company headquarter"];
		var priority = [0.3, 0.3, 0.4, 0.6, 0.6,0.6]
		for (let i = 0; i < searchterm.length; i++) {
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
			var k=0
			for (let i = 0; i < topResults.length && k < 5; i++) {
				if(topResults[i].innerText!=''){
					result.push(topResults[i].innerText);
					k++;
				}
			}
			if(appDescription!=null && appDescription.innerText.search("People also search for") == -1){
				result.push(appDescription.innerText);
			}
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
					let data1=countryDetector.detect(phraseData[j])
					if(data1.length!=0){
						// data.push(data1[0].iso3166.substring(0, 2))
						for(let k=0;k<data1.length;k++){
							data.push(data1[k].iso3166.substring(0, 2))
						}
					}else{
						//phraseData.splice(j,1)
						//j--;	
					}
				}else{
					//phraseData.splice(j,1)
					//j--;
				}
			}
			var countrycode=await this.frequency(data)
			result[i]['CountryCode']=countrycode
		}
		return result;
	}
	async frequency(arr) {
		var data=arr.sort((a,b) =>arr.filter(v => v===a).length- arr.filter(v => v===b).length).pop();
		return data
	}
};
