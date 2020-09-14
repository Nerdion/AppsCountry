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
  d3data:any;
  appData:any = [];
  appSearch:string = '';
  loading=false;

  myControl = new FormControl();
  options = [];

  filteredOptions: Observable<string[]>

  constructor(private service:AppServiceService){
 
  }
  ngOnInit(){
    //this.getAppDetails()
    //this.getd3data()
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
  getd3data(){
    var param = {
      'data':true
    }
    this.service.getD3Data(param).subscribe((response) => {
      if(response){
        this.d3data = response
      }
    }) 
    
  }
  getAppDetails(event){
    this.loading=true;
    var param = {
      title:event.source.value
    }
    this.service.getAppDetails(param).subscribe((response) => {
      if(response){
        response[0]['countryCode']='CN'
        this.appData=response
      }
    })  
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
