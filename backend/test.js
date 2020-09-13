var mongo = require('./models/model')
async function getD3data(){
    // {"Framework": "Vue", "Stars": "166443", "Released": "2014"},
    // {"Framework": "React", "Stars": "150793", "Released": "2013"},
    // {"Framework": "Angular", "Stars": "62342", "Released": "2016"},
    // {"Framework": "Backbone", "Stars": "27647", "Released": "2010"},
    // {"Framework": "Ember", "Stars": "21471", "Released": "2011"},
    //{"Country","appcount"}
    let countries = ['US','CN','JP','FR','UK','AU','IN']
    let data = await mongo.appscountry.collection('apps').find().toArray();
    for(let i=0 ;i<data.length;i++){
        let index=between(0, 6);
        data[i]['countryCode']=countries[index];
    }
    let updata = await mongo.appscountry.collection('appsCC').insertMany(data)
    function between(min, max) {  
        return Math.floor(
          Math.random() * (max - min + 1) + min
        )
      }


}
getD3data()