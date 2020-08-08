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
}
