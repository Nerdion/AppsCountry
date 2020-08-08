var googlesearch = require('../models/GoogleSearch');
const puppeteer = require('puppeteer');
const mongo = require('../models/model');
const { app } = require('google-play-scraper');
module.exports.getSearchTermsResult = async function (req, res) {
    try {
        bodyInfo = req.body
        if (1) {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.setViewport({
                width: 1080,
                height: 720,
                deviceScaleFactor: 1,
            });
            var apps = await mongo.appscountry.collection('apps').find().toArray();
            var data = [];
            console.log(apps.length);
                for(let i=0;i<apps.length;i++){
                    if(apps[i].CountryCode==undefined){
                        let dt=await new googlesearch(browser,page).getSearchTermsResult(apps[i]);
                        data.push(dt);
                    }
                }
            console.log(data);
            //response = await new googlesearch(browser,page).getSearchTermsResult("facebook")
            res.send(data)
        } else {
            res.send({ "Success": false, "Error": error, "Payload": [] })
        }
    } catch (e) {
        res.send({ "Success": false, "Error": e.toString(), "Payload": [] });
    }
};


module.exports.getSearchData = async function (req, res) {
    try {
        bodyInfo = req.body
        if (1) {
            response = await new googlesearch().getSearchData()
            res.send(response)
        } else {
            res.send({ "Success": false, "Error": error, "Payload": [] })
        }
    } catch (e) {
        res.send({ "Success": false, "Error": e.toString(), "Payload": [] });
    }
};

module.exports.getCountryName = async function (req, res) {
    try {
        bodyInfo = req.body
        if (1) {
            response = await new googlesearch().getCountryName('asd')
            res.send(response)
        } else {
            res.send({ "Success": false, "Error": error, "Payload": [] })
        }
    } catch (e) {
        res.send({ "Success": false, "Error": e.toString(), "Payload": [] });
    }
}; 