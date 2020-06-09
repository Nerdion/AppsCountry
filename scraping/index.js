
var GoogleSearch = require('./models/GoogleSearch');

 async()=> {
     
        console.log("Errorasdsa")
        var data = await new GoogleSearch().getSearchData()
        console.log(data)

}

