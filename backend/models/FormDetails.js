var gplay = require('google-play-scraper');
const mongo = require('../models/model');
const { ObjectId } = require('mongodb');
module.exports = class FormDetails {
    constructor() { }

    async appSearch(bodyInfo) {
        let searchText = bodyInfo.searchText.toString();
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
    async getAppDetails(bodyInfo) {
        let title = bodyInfo.title.toString();
        try {
            let match = { 'title': title };
            let filter = [
                {
                    "$match": match
                }
            ];
            var res = await mongo.appscountry.collection('apps').aggregate(filter).toArray();
        } catch (e) {
            return { "Success": false, "Error": e.toString(), "Payload": [] };
        }

        return res;
    }
    async getD3Data() {
        // {"Framework": "Vue", "Stars": "166443", "Released": "2014"},
        // {"Framework": "React", "Stars": "150793", "Released": "2013"},
        // {"Framework": "Angular", "Stars": "62342", "Released": "2016"},
        // {"Framework": "Backbone", "Stars": "27647", "Released": "2010"},
        // {"Framework": "Ember", "Stars": "21471", "Released": "2011"},
        //{"Country","appcount"}
        // let countries = ['US','CN','JP','FR','UK','AU','IN']
        // let data = await mongo.appscountry.collection('apps').find({},{fields: {_id:0}}).toArray();
        // for(let i=0 ;i<data.length;i++){
        //     let index=between(0, 6);
        //     data[i]['countryCode']=countries[index];
        // }
        // let updata = await mongo.appscountry.collection('appsCC').insertMany(data)
        // function between(min, max) {  
        //     return Math.floor(
        //       Math.random() * (max - min + 1) + min
        //     )
        //   }
        

        let filter = [
            {
                "$group":
                {
                    "_id": "$countryCode", "field1":{ "$sum": 1 }
                }
            }
        ]
        var data = await mongo.appscountry.collection('appsCC').aggregate(filter).toArray()

        return data

        // let data = await mongo.appscountry.collection('apps').find().toArray();
        // for(let i=0;i<data.length;i++){
        //     let appId = data[i].appId;
        //     let adata = await mongo.appscountry.collection('apps').find({'appId':appId}).toArray();
        //     console.log(adata)
        //     if(adata.length!=0){
        //         for(let j=1;j<adata.length;j++){
        //             let id = data[i]._id
        //             await mongo.appscountry.collection('apps').deleteOne({_id:ObjectId(id)})
        //         }
        //     }
        // }


    }
}