const puppeteer = require('puppeteer');
const countryDetector = require("country-in-text-detector");
// var result= [
//     "TikTok is the destination for short-form mobile videos. Our mission is to capture and present the world's creativity, knowledge, and precious life moments, directly ...",
//     "TikTok is THE destination for mobile videos. On TikTok, short-form videos are exciting, spontaneous, and genuine. Whether you're a sports fanatic, a pet ...",
//     '',
//     '',
//     '',
//     '',
//     'TikTok is committed to supporting the Black community and underrepresented groups as a whole. Check out our blog post for more information on the actions ...',
//     'TikTok offers you real, interesting, and fun videos that will make your day. □ Explore videos, just one scroll away. Watch all types of videos, from Comedy, Gaming, ...',
//     '25.6m Followers, 630 Following, 591 Posts - See Instagram photos and videos from TikTok (@tiktok)',
//     "Mar 10, 2019 - TikTok is an app for making and sharing short videos. The videos are tall, not square, like on Snapchat or Instagram's stories, but you navigate ...",
//     "Jan 29, 2019 - If you haven't been paying attention to TikTok, you haven't been paying attention. The short-form video app hailing from Beijing's ByteDance ...",
//     "RM 603, 6/F HANG PONT COMM BLDG 31 TONKIN ST CHEUNG SHA WAN KLN",
//     "RЯ родился в России."
//   ]

// (async () => {
//     // let url = "https://google.com/search?q=" + appName;
//     // const browser = await puppeteer.launch();
//     // const page = await browser.newPage();
//     // await page.setViewport({
//     //     width: 1080,
//     //     height: 720,
//     //     deviceScaleFactor: 1,
//     //   });
//     // await page.goto(url,{waitUntil: 'networkidle2'});
//     // //await page.screenshot({path: 'ss/example.png'});

//     // let myData = await page.evaluate(() => {
//     //     let topResults = document.querySelectorAll('.st');
//     //     let appDescription = document.querySelector('#kp-wp-tab-overview > div:nth-child(1)');
//     //     var result = [];
//     //     for(let i=0; i<topResults.length; i++) {
//     //         result.push(topResults[i].innerText);
//     //     }

//     //     result.push(appDescription);

//     //     return {
//     //         result
//     //     }
//     // });
//     // var searchdata=await new this.getSearchData();
//     // var country=[];
//     // for(let i=0;i<result.length;i++){
//     //     let data = countryDetector.detect(result[i])
//     //     country.push(data)
//     // }
//     // var res=[]
//     // var country= await getcountryname((result)=>{
//     //     for(let i=0;i<result.length;i++){
//     //       res.push(countryDetector.detect(result[i]))
//     //     }
//     //     return res
//     // })();
//     //await console.log(myData,"\n\n");
//     await console.log('\n',country)
//     await browser.close();
    
// })();

class googleSearch{
  constructor(){
    var searchdata=await this.getSearchData();
    console.log("result data",searchdata);
    var countrydata=await this.getCountryName(searchdata);
    console.log("country name data",countrydata)

  }
  async getSearchData(){
    let appName = 'TikTok';
    let url = "https://google.com/search?q=" + appName;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 1080,
        height: 720,
        deviceScaleFactor: 1,
      });
    await page.goto(url,{waitUntil: 'networkidle2'});

    let myData = await page.evaluate(() => {
      let topResults = document.querySelectorAll('.st');
      let appDescription = document.querySelector('#kp-wp-tab-overview > div:nth-child(1)');
      var result = [];
      for(let i=0; i<topResults.length; i++) {
          result.push(topResults[i].innerText);
      }

      result.push(appDescription);

      return {
          result
      }
  });
  return myData;
  }
  async getCountryName(result){
    var country=[];
    for(let i=0;i<result.length;i++){
        let data = countryDetector.detect(result[i])
        country.push(data)
    }
    return country;
  }
};

module.exports=googleSearch;


