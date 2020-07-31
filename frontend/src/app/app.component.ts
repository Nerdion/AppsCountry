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
  loading=false;
  constructor(private service:AppServiceService){

  }
  ngOnInit(){
    this.getDetails();
  }

  getDetails(){
    this.loading=true;
    this.service.getSearchData().subscribe((response) => {
      if(response){
        this.loading=false
        console.log("suc")
         this.data = response;

      }else{
        this.loading=false
        console.log("fail")
      }
    })
  }
}
