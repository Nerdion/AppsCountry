// const puppeteer = require('puppeteer');
// const GoogleSearch = require('./models/GoogleSearch');
// const PlayStore = require('./models/PlayStore');

// async function myFunc() {
// 	const browser = await puppeteer.launch();
// 	const page = await browser.newPage();
// 	await page.setViewport({
// 		width: 720,
// 		height: 480,
// 		deviceScaleFactor: 1,
// 	});
// 	var t1 = console.time()
// 	//var data =  await gs.getSearchData()
// 	var playStoreData = await new PlayStore('com.brave.browser').getPlayStoreInfo();
// 	//var googleSearch = await new GoogleSearch(browser,page).getSearchTermsResult(playStoreData.devName);

// 	console.log(playStoreData);
// 	//console.log(googleSearch);
// 	//var countryData=await new GoogleSearch().getCountryName()
// 	await browser.close();
// 	console.timeEnd()

// }

// myFunc();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

var cors = require('cors');
app.use(cors());    
var index = require('./routes/route');
app.use('/', index);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});

// listen on port 3000
app.listen(3000, function () {
  console.log('Express app listening on port 3000');
});