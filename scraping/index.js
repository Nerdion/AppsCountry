
const GoogleSearch  = require('./models/GoogleSearch');
const PlayStore = require('./models/PlayStore');
var gs = new GoogleSearch();

async function myFunc() {
	//var data =  await gs.getSearchData()
	var playStoreData = await new PlayStore().getPlayStoreInfo();
	var googleSearch = await new GoogleSearch().getSearchData();
	console.log(playStoreData);
	console.log(googleSearch);
}

myFunc();