import { Component, OnInit, NgModule } from '@angular/core';
import { AppServiceService } from './app-service.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'frontend';
  data:any;
  response:any = [];
  appSearch:string = '';
  loading=false;

  myControl = new FormControl();
  options = [];

  filteredOptions: Observable<string[]>

  constructor(private service:AppServiceService){
 
  }
  ngOnInit(){
    //this.getAppDetails()
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  getAppDetails(){
    this.loading=true;
    console.log("I was used")
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

  searchForApp() {
    if(this.appSearch.length >= 1) {
      var param = {
        searchText:this.appSearch
      }
      this.service.getSearchData(param).subscribe((response) => {
        if(response){
          this.options = []

          console.log(response)
          
          for(let i=0; i<Object.keys(response).length; i++) {
            this.options.push(response[i].AppName)
          }
        }
      })
    }
  }
}
