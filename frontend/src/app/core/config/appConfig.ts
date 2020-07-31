import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { API_ENDPOINT } from './Configuration'
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(
    private http: HttpClient,
    private router: Router) { }
  
  CONFIG = {
    //Play Store api's
    getPlayStoreInfo: API_ENDPOINT+'api/getplaystoreinfo',
    //Google Search api's
    getSearchTermsResult: API_ENDPOINT+'api/getsearchtermsresult',
    getSearchData: API_ENDPOINT+'api/getsearchdata',
    getCountryName: API_ENDPOINT+'api/getcountryname',
    //Google Play Scrapper api's
    appslistbydev: API_ENDPOINT+'api/appslistbydev',
    appscategory: API_ENDPOINT+'api/appscategory',
    appslistbycategory: API_ENDPOINT+'api/appslistbycategory'
  };
}
