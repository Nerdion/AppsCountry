import { Component, OnInit, NgModule } from '@angular/core';
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
  appSearch:string;
  loading=false;
  constructor(private service:AppServiceService){

  }
  ngOnInit(){
    this.getDetails()
  }

  getDetails(){
    this.loading=true;
 
    // this.service.getSearchData().subscribe((response) => {
      
    // })
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

  searchForApp(theEvent) {
    if(theEvent.length >= 3) {
      var param = {
        searchText:theEvent
      }
      this.service.getSearchData(param).subscribe((response) => {
        if(response){
          console.log(response)
        }
      })
    }
  }
}
