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
        // var mapFunction1 = function() {
        //     emit(this.countryCode, this.price);
        //  };
         
        //  var reduceFunction1 = function(keyCustId, valuesPrices) {
        //     return Array.sum(valuesPrices);
        //  };
        
        let cnfilter = [
            { "$match": { "countryCode": "CN" } },
            { "$group": { "_id": "$developer", "field1": { "$sum": 1.00 } } }
        ]
        let usfilter =[
            { "$match": { "countryCode": "US" } },
            { "$group": { "_id": "$developer", "field1": { "$sum": 1.00 } } }
        ]
        let infilter =[
            { "$match": { "countryCode": "IN" } },
            { "$group": { "_id": "$developer", "field1": { "$sum": 1.00 } } }
        ]
        let ukfilter =[
            { "$match": { "countryCode": "CN" } },
            { "$group": { "_id": "$developer", "field1": { "$sum": 1.00 } } }
        ]
        let filter = [
            { "$group": { "_id": "$countryCode", "field1": { "$sum": 1.00 } } },
            { "$project": { "_id": 1.00, "field1": 1.00, "countryCode": "$_id", "TotalCount": "$field" } }
        ]
        var indata = await mongo.appscountry.collection('appsCC').aggregate(infilter).toArray()
        var cndata = await mongo.appscountry.collection('appsCC').aggregate(cnfilter).toArray()
        var usdata = await mongo.appscountry.collection('appsCC').aggregate(usfilter).toArray()
        var ukdata = await mongo.appscountry.collection('appsCC').aggregate(ukfilter).toArray()
        var india = {
            "CountryCode":'IN',
            "TotalDev":indata.length
        }
        var china = {
            "CountryCode":'CN',
            "TotalDev":cndata.length
        }
        var us = {
            "CountryCode":'US',
            "TotalDev":usdata.length
        }
        var uk = {
            "CountryCode":'UK',
            "TotalDev":ukdata.length
        }
        var cd =[]
        cd.push(india);
        cd.push(china);
        cd.push(us);
        cd.push(uk);

        var data = await mongo.appscountry.collection('appsCC').aggregate(filter).toArray()

        return {"data":data, "dcd":cd}

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