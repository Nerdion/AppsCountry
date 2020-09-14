import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ConfigService } from '../app/core/config/appConfig';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  
  constructor(private http:HttpClient,private confService: ConfigService) { }
  URLS = this.confService.CONFIG;
  getSearchData(param:any){
    return this.http.post(this.URLS.getSearchList,param)
  }
  getAppDetails(param:any){
    return this.http.post(this.URLS.getAppDetails,param)
  }
  getD3Data(param:any){
    return this.http.post(this.URLS.getD3Data,param)
  }
  getddata(){
    var data = [
      {"CountryCode": "CN", "Stars": "7000", "Released": "2014"},
      {"CountryCode": "US", "Stars": "4000", "Released": "2013"},
      {"CountryCode": "IN", "Stars": "2994", "Released": "2016"},
      {"CountryCode": "UK", "Stars": "2000", "Released": "2010"},
      {"CountryCode": "JP", "Stars": "1100", "Released": "2011"},
    ];
    return data;
  }
  getHighRApp(){
    var data = [
      {"CountryCode": "Chines Dev", "Stars": "200", "Released": "2009"},
      {"CountryCode": "Chines Dev", "Stars": "1020", "Released": "2010"},
      {"CountryCode": "Chines Dev", "Stars": "2994", "Released": "2011"},
      {"CountryCode": "Chines Dev", "Stars": "3500", "Released": "2012"},
      {"CountryCode": "Chines Dev", "Stars": "4000", "Released": "2013"},
      {"CountryCode": "Chines Dev", "Stars": "6000", "Released": "2014"},
      {"CountryCode": "Chines Dev", "Stars": "9560", "Released": "2015"},
      {"CountryCode": "Chines Dev", "Stars": "21000", "Released": "2016"},
      {"CountryCode": "Chines Dev", "Stars": "35666", "Released": "2017"},
    ];
    return data
  }
}
