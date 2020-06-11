
const GoogleSearch  = require('./models/GoogleSearch');
const PlayStore = require('./models/PlayStore');
var gs = new GoogleSearch();
var ps = new PlayStore();

async function myFunc() {
	//var data =  await gs.getSearchData()
	var playStoreData = await ps.getPlayStoreInfo();
}

myFunc();