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
    appsListByDev: API_ENDPOINT+'api/appslistbydev',
    appsCategory: API_ENDPOINT+'api/appscategory',
    appsListByCategory: API_ENDPOINT+'api/appslistbycategory',
    getSearchList:API_ENDPOINT+'api/appsearchlist',
    getAppDetails:API_ENDPOINT+'api/getappdetails',

  };
}
