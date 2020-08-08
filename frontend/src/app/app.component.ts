import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  data:any;
  response:any;
  loading=false;
  constructor(private service:AppServiceService){

  }
  ngOnInit(){
    this.getDetails();
  }

  getDetails(){
    this.loading=true;
    /*
    this.service.getSearchData().subscribe((response) => {
      if(response){
        this.loading=false
        console.log("suc")
         this.data = response;

      }else{
        this.loading=false
        console.log("fail")
      }
    })*/
     this.response = [{
      "title": "Call of Duty®: Mobile",
      "appId": "com.activision.callofduty.shooter",
      "url": "https://play.google.com/store/apps/details?id=com.activision.callofduty.shooter",
      "icon": "https://lh3.googleusercontent.com/6lEEhm2WZojAbZ1uqRJb-KEmT24xydDd5I0QjABtlNOeDr9NrNxztXe67AArHUFuqSI",
      "developer": "Activision Publishing, Inc.",
      "developerId": "Activision+Publishing,+Inc.",
      "priceText": "FREE",
      "currency": undefined,
      "price": 0.00,
      "free": true,
      "cc":"CN",
    }];
  }
}
