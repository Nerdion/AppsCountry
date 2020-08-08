var gplay = require('google-play-scraper');
const mongo = require('../models/model');
module.exports = class FormDetails {
    constructor() { }

    async appSearch(bodyInfo) {
        let searchText = bodyInfo.searchText
        var conmatch = { "title": { "$regex": searchText, "$options": 'i' } }
        var grp = { "_id": { "AppName": "$title", "AppId": "$appId" } }
        var pro = { "_id": 0, "AppName": "$_id.AppName", "AppId": "$_id.AppId" }

        var res = await mongo.appscountry.collection('apps').aggregate([
            { "$match": conmatch },
            { "$group": grp },
            { "$project": pro }
        ]).toArray();

        return res
    }
}