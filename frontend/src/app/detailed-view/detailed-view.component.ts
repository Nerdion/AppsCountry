import { Component, OnInit,Input, OnChanges, SimpleChanges } from '@angular/core';
import {getName} from 'country-list';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.css','../../../node_modules/flag-icon-css/css/flag-icon.css'],
})
export class DetailedViewComponent implements OnInit, OnChanges {
  @Input() formgroups = [];
  isDataLoaded:boolean = false;
  detailList:any;
  countryCode:String;
  countryName:string;
  constructor() { 
  }
  ngOnInit(): void {
    this.displayData()
  }

  ngOnChanges(changes: SimpleChanges) {
    this.formgroups = changes['formgroups'].currentValue
    this.displayData()
  }

  installApp() {
    window.open(this.detailList.url);
  }

  displayData() {
    if(this.formgroups.length > 0) {
      this.detailList = this.formgroups[0];
      
      //this.countryCode = 'flag-icon-' + this.detailList.cc.toLowerCase();
      //implement this using REST, also send countryName along with code
      //this.countryName = getName(this.detailList.cc);
      this.isDataLoaded = true;
    } else {
      this.isDataLoaded = false;
    }
  }

}
