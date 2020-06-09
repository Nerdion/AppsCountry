
const GoogleSearch  = require('./models/GoogleSearch');

var gs = new GoogleSearch()

async function myFunc() {
	var data =  await gs.getSearchData()
}

myFunc();